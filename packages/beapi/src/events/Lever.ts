import { world, Block as IBlock, Dimension as IDimension } from 'mojang-minecraft'
import type { Client } from '../client'
import { Block } from '../block'
import { setProto } from '../'
import AbstractEvent from './AbstractEvent'

export interface LeverActivateEvent {
  block: IBlock
  dimension: IDimension
  isPowered: boolean
}

export class Lever extends AbstractEvent {
  protected readonly _logic = this.__logic.bind(this)
  protected readonly _client: Client
  protected _registered = false

  @setProto('Lever')
  public readonly name = 'Lever'

  @setProto('leverActivate')
  public readonly iName = 'leverActivate'

  public readonly alwaysCancel = false

  public constructor(client: Client) {
    super()
    this._client = client
  }

  public on(): void {
    if (!this._registered) {
      // @ts-ignore
      world.events[this.iName].subscribe(this._logic)
      this._registered = true
    }
  }

  public off(): void {
    if (this._registered) {
      // @ts-ignore
      world.events[this.iName].unsubscribe(this._logic)
      this._registered = false
    }
  }

  protected __logic(arg: LeverActivateEvent): void {
    const block = new Block(this._client, arg.block)
    this._client.emit(this.name, {
      block,
      dimension: arg.dimension,
      powered: arg.isPowered,
      cancel: () => {
        const permutation = block.getPermutation()
        const bit = permutation.getProperty('open_bit') as { name: string; value: boolean }
        if (bit.value) bit.value = false
        if (!bit.value) bit.value = true
        block.setPermutation(permutation)
      },
    })
  }
}