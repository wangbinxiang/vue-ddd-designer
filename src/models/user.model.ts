import { Exclude, Expose } from 'class-transformer'

@Exclude()
export class User {
  @Expose()
  public id: string = ''

  @Expose({ name: 'name'})
  public username: string = ''
}
