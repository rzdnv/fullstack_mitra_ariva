
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Poli
 * 
 */
export type Poli = $Result.DefaultSelection<Prisma.$PoliPayload>
/**
 * Model Dokter
 * 
 */
export type Dokter = $Result.DefaultSelection<Prisma.$DokterPayload>
/**
 * Model JadwalDokter
 * 
 */
export type JadwalDokter = $Result.DefaultSelection<Prisma.$JadwalDokterPayload>
/**
 * Model Berita
 * 
 */
export type Berita = $Result.DefaultSelection<Prisma.$BeritaPayload>
/**
 * Model Layanan
 * 
 */
export type Layanan = $Result.DefaultSelection<Prisma.$LayananPayload>
/**
 * Model LayananDetail
 * 
 */
export type LayananDetail = $Result.DefaultSelection<Prisma.$LayananDetailPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  EDITOR: 'EDITOR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Hari: {
  SENIN: 'SENIN',
  SELASA: 'SELASA',
  RABU: 'RABU',
  KAMIS: 'KAMIS',
  JUMAT: 'JUMAT',
  SABTU: 'SABTU',
  MINGGU: 'MINGGU'
};

export type Hari = (typeof Hari)[keyof typeof Hari]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Hari = $Enums.Hari

export const Hari: typeof $Enums.Hari

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.poli`: Exposes CRUD operations for the **Poli** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Polis
    * const polis = await prisma.poli.findMany()
    * ```
    */
  get poli(): Prisma.PoliDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dokter`: Exposes CRUD operations for the **Dokter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dokters
    * const dokters = await prisma.dokter.findMany()
    * ```
    */
  get dokter(): Prisma.DokterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jadwalDokter`: Exposes CRUD operations for the **JadwalDokter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JadwalDokters
    * const jadwalDokters = await prisma.jadwalDokter.findMany()
    * ```
    */
  get jadwalDokter(): Prisma.JadwalDokterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.berita`: Exposes CRUD operations for the **Berita** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Beritas
    * const beritas = await prisma.berita.findMany()
    * ```
    */
  get berita(): Prisma.BeritaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.layanan`: Exposes CRUD operations for the **Layanan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Layanans
    * const layanans = await prisma.layanan.findMany()
    * ```
    */
  get layanan(): Prisma.LayananDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.layananDetail`: Exposes CRUD operations for the **LayananDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LayananDetails
    * const layananDetails = await prisma.layananDetail.findMany()
    * ```
    */
  get layananDetail(): Prisma.LayananDetailDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Poli: 'Poli',
    Dokter: 'Dokter',
    JadwalDokter: 'JadwalDokter',
    Berita: 'Berita',
    Layanan: 'Layanan',
    LayananDetail: 'LayananDetail'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "poli" | "dokter" | "jadwalDokter" | "berita" | "layanan" | "layananDetail"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Poli: {
        payload: Prisma.$PoliPayload<ExtArgs>
        fields: Prisma.PoliFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PoliFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoliPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PoliFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoliPayload>
          }
          findFirst: {
            args: Prisma.PoliFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoliPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PoliFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoliPayload>
          }
          findMany: {
            args: Prisma.PoliFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoliPayload>[]
          }
          create: {
            args: Prisma.PoliCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoliPayload>
          }
          createMany: {
            args: Prisma.PoliCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PoliCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoliPayload>[]
          }
          delete: {
            args: Prisma.PoliDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoliPayload>
          }
          update: {
            args: Prisma.PoliUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoliPayload>
          }
          deleteMany: {
            args: Prisma.PoliDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PoliUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PoliUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoliPayload>[]
          }
          upsert: {
            args: Prisma.PoliUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoliPayload>
          }
          aggregate: {
            args: Prisma.PoliAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoli>
          }
          groupBy: {
            args: Prisma.PoliGroupByArgs<ExtArgs>
            result: $Utils.Optional<PoliGroupByOutputType>[]
          }
          count: {
            args: Prisma.PoliCountArgs<ExtArgs>
            result: $Utils.Optional<PoliCountAggregateOutputType> | number
          }
        }
      }
      Dokter: {
        payload: Prisma.$DokterPayload<ExtArgs>
        fields: Prisma.DokterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DokterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DokterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokterPayload>
          }
          findFirst: {
            args: Prisma.DokterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DokterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokterPayload>
          }
          findMany: {
            args: Prisma.DokterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokterPayload>[]
          }
          create: {
            args: Prisma.DokterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokterPayload>
          }
          createMany: {
            args: Prisma.DokterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DokterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokterPayload>[]
          }
          delete: {
            args: Prisma.DokterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokterPayload>
          }
          update: {
            args: Prisma.DokterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokterPayload>
          }
          deleteMany: {
            args: Prisma.DokterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DokterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DokterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokterPayload>[]
          }
          upsert: {
            args: Prisma.DokterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokterPayload>
          }
          aggregate: {
            args: Prisma.DokterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDokter>
          }
          groupBy: {
            args: Prisma.DokterGroupByArgs<ExtArgs>
            result: $Utils.Optional<DokterGroupByOutputType>[]
          }
          count: {
            args: Prisma.DokterCountArgs<ExtArgs>
            result: $Utils.Optional<DokterCountAggregateOutputType> | number
          }
        }
      }
      JadwalDokter: {
        payload: Prisma.$JadwalDokterPayload<ExtArgs>
        fields: Prisma.JadwalDokterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JadwalDokterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalDokterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JadwalDokterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalDokterPayload>
          }
          findFirst: {
            args: Prisma.JadwalDokterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalDokterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JadwalDokterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalDokterPayload>
          }
          findMany: {
            args: Prisma.JadwalDokterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalDokterPayload>[]
          }
          create: {
            args: Prisma.JadwalDokterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalDokterPayload>
          }
          createMany: {
            args: Prisma.JadwalDokterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JadwalDokterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalDokterPayload>[]
          }
          delete: {
            args: Prisma.JadwalDokterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalDokterPayload>
          }
          update: {
            args: Prisma.JadwalDokterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalDokterPayload>
          }
          deleteMany: {
            args: Prisma.JadwalDokterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JadwalDokterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JadwalDokterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalDokterPayload>[]
          }
          upsert: {
            args: Prisma.JadwalDokterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalDokterPayload>
          }
          aggregate: {
            args: Prisma.JadwalDokterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJadwalDokter>
          }
          groupBy: {
            args: Prisma.JadwalDokterGroupByArgs<ExtArgs>
            result: $Utils.Optional<JadwalDokterGroupByOutputType>[]
          }
          count: {
            args: Prisma.JadwalDokterCountArgs<ExtArgs>
            result: $Utils.Optional<JadwalDokterCountAggregateOutputType> | number
          }
        }
      }
      Berita: {
        payload: Prisma.$BeritaPayload<ExtArgs>
        fields: Prisma.BeritaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BeritaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeritaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BeritaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeritaPayload>
          }
          findFirst: {
            args: Prisma.BeritaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeritaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BeritaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeritaPayload>
          }
          findMany: {
            args: Prisma.BeritaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeritaPayload>[]
          }
          create: {
            args: Prisma.BeritaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeritaPayload>
          }
          createMany: {
            args: Prisma.BeritaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BeritaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeritaPayload>[]
          }
          delete: {
            args: Prisma.BeritaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeritaPayload>
          }
          update: {
            args: Prisma.BeritaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeritaPayload>
          }
          deleteMany: {
            args: Prisma.BeritaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BeritaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BeritaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeritaPayload>[]
          }
          upsert: {
            args: Prisma.BeritaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeritaPayload>
          }
          aggregate: {
            args: Prisma.BeritaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBerita>
          }
          groupBy: {
            args: Prisma.BeritaGroupByArgs<ExtArgs>
            result: $Utils.Optional<BeritaGroupByOutputType>[]
          }
          count: {
            args: Prisma.BeritaCountArgs<ExtArgs>
            result: $Utils.Optional<BeritaCountAggregateOutputType> | number
          }
        }
      }
      Layanan: {
        payload: Prisma.$LayananPayload<ExtArgs>
        fields: Prisma.LayananFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LayananFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LayananFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananPayload>
          }
          findFirst: {
            args: Prisma.LayananFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LayananFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananPayload>
          }
          findMany: {
            args: Prisma.LayananFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananPayload>[]
          }
          create: {
            args: Prisma.LayananCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananPayload>
          }
          createMany: {
            args: Prisma.LayananCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LayananCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananPayload>[]
          }
          delete: {
            args: Prisma.LayananDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananPayload>
          }
          update: {
            args: Prisma.LayananUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananPayload>
          }
          deleteMany: {
            args: Prisma.LayananDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LayananUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LayananUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananPayload>[]
          }
          upsert: {
            args: Prisma.LayananUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananPayload>
          }
          aggregate: {
            args: Prisma.LayananAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLayanan>
          }
          groupBy: {
            args: Prisma.LayananGroupByArgs<ExtArgs>
            result: $Utils.Optional<LayananGroupByOutputType>[]
          }
          count: {
            args: Prisma.LayananCountArgs<ExtArgs>
            result: $Utils.Optional<LayananCountAggregateOutputType> | number
          }
        }
      }
      LayananDetail: {
        payload: Prisma.$LayananDetailPayload<ExtArgs>
        fields: Prisma.LayananDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LayananDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LayananDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananDetailPayload>
          }
          findFirst: {
            args: Prisma.LayananDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LayananDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananDetailPayload>
          }
          findMany: {
            args: Prisma.LayananDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananDetailPayload>[]
          }
          create: {
            args: Prisma.LayananDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananDetailPayload>
          }
          createMany: {
            args: Prisma.LayananDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LayananDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananDetailPayload>[]
          }
          delete: {
            args: Prisma.LayananDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananDetailPayload>
          }
          update: {
            args: Prisma.LayananDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananDetailPayload>
          }
          deleteMany: {
            args: Prisma.LayananDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LayananDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LayananDetailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananDetailPayload>[]
          }
          upsert: {
            args: Prisma.LayananDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananDetailPayload>
          }
          aggregate: {
            args: Prisma.LayananDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLayananDetail>
          }
          groupBy: {
            args: Prisma.LayananDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<LayananDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.LayananDetailCountArgs<ExtArgs>
            result: $Utils.Optional<LayananDetailCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    poli?: PoliOmit
    dokter?: DokterOmit
    jadwalDokter?: JadwalDokterOmit
    berita?: BeritaOmit
    layanan?: LayananOmit
    layananDetail?: LayananDetailOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    berita: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    berita?: boolean | UserCountOutputTypeCountBeritaArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBeritaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BeritaWhereInput
  }


  /**
   * Count Type PoliCountOutputType
   */

  export type PoliCountOutputType = {
    dokter: number
  }

  export type PoliCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dokter?: boolean | PoliCountOutputTypeCountDokterArgs
  }

  // Custom InputTypes
  /**
   * PoliCountOutputType without action
   */
  export type PoliCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoliCountOutputType
     */
    select?: PoliCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PoliCountOutputType without action
   */
  export type PoliCountOutputTypeCountDokterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DokterWhereInput
  }


  /**
   * Count Type DokterCountOutputType
   */

  export type DokterCountOutputType = {
    jadwal: number
  }

  export type DokterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jadwal?: boolean | DokterCountOutputTypeCountJadwalArgs
  }

  // Custom InputTypes
  /**
   * DokterCountOutputType without action
   */
  export type DokterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DokterCountOutputType
     */
    select?: DokterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DokterCountOutputType without action
   */
  export type DokterCountOutputTypeCountJadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JadwalDokterWhereInput
  }


  /**
   * Count Type LayananCountOutputType
   */

  export type LayananCountOutputType = {
    detail: number
  }

  export type LayananCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detail?: boolean | LayananCountOutputTypeCountDetailArgs
  }

  // Custom InputTypes
  /**
   * LayananCountOutputType without action
   */
  export type LayananCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayananCountOutputType
     */
    select?: LayananCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LayananCountOutputType without action
   */
  export type LayananCountOutputTypeCountDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LayananDetailWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    role: $Enums.Role
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    berita?: boolean | User$beritaArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    berita?: boolean | User$beritaArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      berita: Prisma.$BeritaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    berita<T extends User$beritaArgs<ExtArgs> = {}>(args?: Subset<T, User$beritaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeritaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.berita
   */
  export type User$beritaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeritaInclude<ExtArgs> | null
    where?: BeritaWhereInput
    orderBy?: BeritaOrderByWithRelationInput | BeritaOrderByWithRelationInput[]
    cursor?: BeritaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BeritaScalarFieldEnum | BeritaScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Poli
   */

  export type AggregatePoli = {
    _count: PoliCountAggregateOutputType | null
    _avg: PoliAvgAggregateOutputType | null
    _sum: PoliSumAggregateOutputType | null
    _min: PoliMinAggregateOutputType | null
    _max: PoliMaxAggregateOutputType | null
  }

  export type PoliAvgAggregateOutputType = {
    id: number | null
  }

  export type PoliSumAggregateOutputType = {
    id: number | null
  }

  export type PoliMinAggregateOutputType = {
    id: number | null
    namaPoli: string | null
    createdAt: Date | null
  }

  export type PoliMaxAggregateOutputType = {
    id: number | null
    namaPoli: string | null
    createdAt: Date | null
  }

  export type PoliCountAggregateOutputType = {
    id: number
    namaPoli: number
    createdAt: number
    _all: number
  }


  export type PoliAvgAggregateInputType = {
    id?: true
  }

  export type PoliSumAggregateInputType = {
    id?: true
  }

  export type PoliMinAggregateInputType = {
    id?: true
    namaPoli?: true
    createdAt?: true
  }

  export type PoliMaxAggregateInputType = {
    id?: true
    namaPoli?: true
    createdAt?: true
  }

  export type PoliCountAggregateInputType = {
    id?: true
    namaPoli?: true
    createdAt?: true
    _all?: true
  }

  export type PoliAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Poli to aggregate.
     */
    where?: PoliWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Polis to fetch.
     */
    orderBy?: PoliOrderByWithRelationInput | PoliOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PoliWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Polis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Polis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Polis
    **/
    _count?: true | PoliCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PoliAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PoliSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PoliMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PoliMaxAggregateInputType
  }

  export type GetPoliAggregateType<T extends PoliAggregateArgs> = {
        [P in keyof T & keyof AggregatePoli]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoli[P]>
      : GetScalarType<T[P], AggregatePoli[P]>
  }




  export type PoliGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoliWhereInput
    orderBy?: PoliOrderByWithAggregationInput | PoliOrderByWithAggregationInput[]
    by: PoliScalarFieldEnum[] | PoliScalarFieldEnum
    having?: PoliScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PoliCountAggregateInputType | true
    _avg?: PoliAvgAggregateInputType
    _sum?: PoliSumAggregateInputType
    _min?: PoliMinAggregateInputType
    _max?: PoliMaxAggregateInputType
  }

  export type PoliGroupByOutputType = {
    id: number
    namaPoli: string
    createdAt: Date
    _count: PoliCountAggregateOutputType | null
    _avg: PoliAvgAggregateOutputType | null
    _sum: PoliSumAggregateOutputType | null
    _min: PoliMinAggregateOutputType | null
    _max: PoliMaxAggregateOutputType | null
  }

  type GetPoliGroupByPayload<T extends PoliGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PoliGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PoliGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PoliGroupByOutputType[P]>
            : GetScalarType<T[P], PoliGroupByOutputType[P]>
        }
      >
    >


  export type PoliSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaPoli?: boolean
    createdAt?: boolean
    dokter?: boolean | Poli$dokterArgs<ExtArgs>
    _count?: boolean | PoliCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poli"]>

  export type PoliSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaPoli?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["poli"]>

  export type PoliSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaPoli?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["poli"]>

  export type PoliSelectScalar = {
    id?: boolean
    namaPoli?: boolean
    createdAt?: boolean
  }

  export type PoliOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "namaPoli" | "createdAt", ExtArgs["result"]["poli"]>
  export type PoliInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dokter?: boolean | Poli$dokterArgs<ExtArgs>
    _count?: boolean | PoliCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PoliIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PoliIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PoliPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Poli"
    objects: {
      dokter: Prisma.$DokterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      namaPoli: string
      createdAt: Date
    }, ExtArgs["result"]["poli"]>
    composites: {}
  }

  type PoliGetPayload<S extends boolean | null | undefined | PoliDefaultArgs> = $Result.GetResult<Prisma.$PoliPayload, S>

  type PoliCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PoliFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PoliCountAggregateInputType | true
    }

  export interface PoliDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Poli'], meta: { name: 'Poli' } }
    /**
     * Find zero or one Poli that matches the filter.
     * @param {PoliFindUniqueArgs} args - Arguments to find a Poli
     * @example
     * // Get one Poli
     * const poli = await prisma.poli.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PoliFindUniqueArgs>(args: SelectSubset<T, PoliFindUniqueArgs<ExtArgs>>): Prisma__PoliClient<$Result.GetResult<Prisma.$PoliPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Poli that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PoliFindUniqueOrThrowArgs} args - Arguments to find a Poli
     * @example
     * // Get one Poli
     * const poli = await prisma.poli.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PoliFindUniqueOrThrowArgs>(args: SelectSubset<T, PoliFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PoliClient<$Result.GetResult<Prisma.$PoliPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Poli that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoliFindFirstArgs} args - Arguments to find a Poli
     * @example
     * // Get one Poli
     * const poli = await prisma.poli.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PoliFindFirstArgs>(args?: SelectSubset<T, PoliFindFirstArgs<ExtArgs>>): Prisma__PoliClient<$Result.GetResult<Prisma.$PoliPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Poli that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoliFindFirstOrThrowArgs} args - Arguments to find a Poli
     * @example
     * // Get one Poli
     * const poli = await prisma.poli.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PoliFindFirstOrThrowArgs>(args?: SelectSubset<T, PoliFindFirstOrThrowArgs<ExtArgs>>): Prisma__PoliClient<$Result.GetResult<Prisma.$PoliPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Polis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoliFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Polis
     * const polis = await prisma.poli.findMany()
     * 
     * // Get first 10 Polis
     * const polis = await prisma.poli.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const poliWithIdOnly = await prisma.poli.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PoliFindManyArgs>(args?: SelectSubset<T, PoliFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoliPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Poli.
     * @param {PoliCreateArgs} args - Arguments to create a Poli.
     * @example
     * // Create one Poli
     * const Poli = await prisma.poli.create({
     *   data: {
     *     // ... data to create a Poli
     *   }
     * })
     * 
     */
    create<T extends PoliCreateArgs>(args: SelectSubset<T, PoliCreateArgs<ExtArgs>>): Prisma__PoliClient<$Result.GetResult<Prisma.$PoliPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Polis.
     * @param {PoliCreateManyArgs} args - Arguments to create many Polis.
     * @example
     * // Create many Polis
     * const poli = await prisma.poli.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PoliCreateManyArgs>(args?: SelectSubset<T, PoliCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Polis and returns the data saved in the database.
     * @param {PoliCreateManyAndReturnArgs} args - Arguments to create many Polis.
     * @example
     * // Create many Polis
     * const poli = await prisma.poli.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Polis and only return the `id`
     * const poliWithIdOnly = await prisma.poli.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PoliCreateManyAndReturnArgs>(args?: SelectSubset<T, PoliCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoliPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Poli.
     * @param {PoliDeleteArgs} args - Arguments to delete one Poli.
     * @example
     * // Delete one Poli
     * const Poli = await prisma.poli.delete({
     *   where: {
     *     // ... filter to delete one Poli
     *   }
     * })
     * 
     */
    delete<T extends PoliDeleteArgs>(args: SelectSubset<T, PoliDeleteArgs<ExtArgs>>): Prisma__PoliClient<$Result.GetResult<Prisma.$PoliPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Poli.
     * @param {PoliUpdateArgs} args - Arguments to update one Poli.
     * @example
     * // Update one Poli
     * const poli = await prisma.poli.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PoliUpdateArgs>(args: SelectSubset<T, PoliUpdateArgs<ExtArgs>>): Prisma__PoliClient<$Result.GetResult<Prisma.$PoliPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Polis.
     * @param {PoliDeleteManyArgs} args - Arguments to filter Polis to delete.
     * @example
     * // Delete a few Polis
     * const { count } = await prisma.poli.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PoliDeleteManyArgs>(args?: SelectSubset<T, PoliDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Polis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoliUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Polis
     * const poli = await prisma.poli.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PoliUpdateManyArgs>(args: SelectSubset<T, PoliUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Polis and returns the data updated in the database.
     * @param {PoliUpdateManyAndReturnArgs} args - Arguments to update many Polis.
     * @example
     * // Update many Polis
     * const poli = await prisma.poli.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Polis and only return the `id`
     * const poliWithIdOnly = await prisma.poli.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PoliUpdateManyAndReturnArgs>(args: SelectSubset<T, PoliUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoliPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Poli.
     * @param {PoliUpsertArgs} args - Arguments to update or create a Poli.
     * @example
     * // Update or create a Poli
     * const poli = await prisma.poli.upsert({
     *   create: {
     *     // ... data to create a Poli
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Poli we want to update
     *   }
     * })
     */
    upsert<T extends PoliUpsertArgs>(args: SelectSubset<T, PoliUpsertArgs<ExtArgs>>): Prisma__PoliClient<$Result.GetResult<Prisma.$PoliPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Polis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoliCountArgs} args - Arguments to filter Polis to count.
     * @example
     * // Count the number of Polis
     * const count = await prisma.poli.count({
     *   where: {
     *     // ... the filter for the Polis we want to count
     *   }
     * })
    **/
    count<T extends PoliCountArgs>(
      args?: Subset<T, PoliCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PoliCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Poli.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoliAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PoliAggregateArgs>(args: Subset<T, PoliAggregateArgs>): Prisma.PrismaPromise<GetPoliAggregateType<T>>

    /**
     * Group by Poli.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoliGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PoliGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PoliGroupByArgs['orderBy'] }
        : { orderBy?: PoliGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PoliGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoliGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Poli model
   */
  readonly fields: PoliFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Poli.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PoliClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dokter<T extends Poli$dokterArgs<ExtArgs> = {}>(args?: Subset<T, Poli$dokterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DokterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Poli model
   */
  interface PoliFieldRefs {
    readonly id: FieldRef<"Poli", 'Int'>
    readonly namaPoli: FieldRef<"Poli", 'String'>
    readonly createdAt: FieldRef<"Poli", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Poli findUnique
   */
  export type PoliFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poli
     */
    select?: PoliSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poli
     */
    omit?: PoliOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliInclude<ExtArgs> | null
    /**
     * Filter, which Poli to fetch.
     */
    where: PoliWhereUniqueInput
  }

  /**
   * Poli findUniqueOrThrow
   */
  export type PoliFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poli
     */
    select?: PoliSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poli
     */
    omit?: PoliOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliInclude<ExtArgs> | null
    /**
     * Filter, which Poli to fetch.
     */
    where: PoliWhereUniqueInput
  }

  /**
   * Poli findFirst
   */
  export type PoliFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poli
     */
    select?: PoliSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poli
     */
    omit?: PoliOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliInclude<ExtArgs> | null
    /**
     * Filter, which Poli to fetch.
     */
    where?: PoliWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Polis to fetch.
     */
    orderBy?: PoliOrderByWithRelationInput | PoliOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Polis.
     */
    cursor?: PoliWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Polis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Polis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Polis.
     */
    distinct?: PoliScalarFieldEnum | PoliScalarFieldEnum[]
  }

  /**
   * Poli findFirstOrThrow
   */
  export type PoliFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poli
     */
    select?: PoliSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poli
     */
    omit?: PoliOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliInclude<ExtArgs> | null
    /**
     * Filter, which Poli to fetch.
     */
    where?: PoliWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Polis to fetch.
     */
    orderBy?: PoliOrderByWithRelationInput | PoliOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Polis.
     */
    cursor?: PoliWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Polis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Polis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Polis.
     */
    distinct?: PoliScalarFieldEnum | PoliScalarFieldEnum[]
  }

  /**
   * Poli findMany
   */
  export type PoliFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poli
     */
    select?: PoliSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poli
     */
    omit?: PoliOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliInclude<ExtArgs> | null
    /**
     * Filter, which Polis to fetch.
     */
    where?: PoliWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Polis to fetch.
     */
    orderBy?: PoliOrderByWithRelationInput | PoliOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Polis.
     */
    cursor?: PoliWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Polis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Polis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Polis.
     */
    distinct?: PoliScalarFieldEnum | PoliScalarFieldEnum[]
  }

  /**
   * Poli create
   */
  export type PoliCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poli
     */
    select?: PoliSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poli
     */
    omit?: PoliOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliInclude<ExtArgs> | null
    /**
     * The data needed to create a Poli.
     */
    data: XOR<PoliCreateInput, PoliUncheckedCreateInput>
  }

  /**
   * Poli createMany
   */
  export type PoliCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Polis.
     */
    data: PoliCreateManyInput | PoliCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Poli createManyAndReturn
   */
  export type PoliCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poli
     */
    select?: PoliSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Poli
     */
    omit?: PoliOmit<ExtArgs> | null
    /**
     * The data used to create many Polis.
     */
    data: PoliCreateManyInput | PoliCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Poli update
   */
  export type PoliUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poli
     */
    select?: PoliSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poli
     */
    omit?: PoliOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliInclude<ExtArgs> | null
    /**
     * The data needed to update a Poli.
     */
    data: XOR<PoliUpdateInput, PoliUncheckedUpdateInput>
    /**
     * Choose, which Poli to update.
     */
    where: PoliWhereUniqueInput
  }

  /**
   * Poli updateMany
   */
  export type PoliUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Polis.
     */
    data: XOR<PoliUpdateManyMutationInput, PoliUncheckedUpdateManyInput>
    /**
     * Filter which Polis to update
     */
    where?: PoliWhereInput
    /**
     * Limit how many Polis to update.
     */
    limit?: number
  }

  /**
   * Poli updateManyAndReturn
   */
  export type PoliUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poli
     */
    select?: PoliSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Poli
     */
    omit?: PoliOmit<ExtArgs> | null
    /**
     * The data used to update Polis.
     */
    data: XOR<PoliUpdateManyMutationInput, PoliUncheckedUpdateManyInput>
    /**
     * Filter which Polis to update
     */
    where?: PoliWhereInput
    /**
     * Limit how many Polis to update.
     */
    limit?: number
  }

  /**
   * Poli upsert
   */
  export type PoliUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poli
     */
    select?: PoliSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poli
     */
    omit?: PoliOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliInclude<ExtArgs> | null
    /**
     * The filter to search for the Poli to update in case it exists.
     */
    where: PoliWhereUniqueInput
    /**
     * In case the Poli found by the `where` argument doesn't exist, create a new Poli with this data.
     */
    create: XOR<PoliCreateInput, PoliUncheckedCreateInput>
    /**
     * In case the Poli was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PoliUpdateInput, PoliUncheckedUpdateInput>
  }

  /**
   * Poli delete
   */
  export type PoliDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poli
     */
    select?: PoliSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poli
     */
    omit?: PoliOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliInclude<ExtArgs> | null
    /**
     * Filter which Poli to delete.
     */
    where: PoliWhereUniqueInput
  }

  /**
   * Poli deleteMany
   */
  export type PoliDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Polis to delete
     */
    where?: PoliWhereInput
    /**
     * Limit how many Polis to delete.
     */
    limit?: number
  }

  /**
   * Poli.dokter
   */
  export type Poli$dokterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokter
     */
    select?: DokterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokter
     */
    omit?: DokterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokterInclude<ExtArgs> | null
    where?: DokterWhereInput
    orderBy?: DokterOrderByWithRelationInput | DokterOrderByWithRelationInput[]
    cursor?: DokterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DokterScalarFieldEnum | DokterScalarFieldEnum[]
  }

  /**
   * Poli without action
   */
  export type PoliDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poli
     */
    select?: PoliSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poli
     */
    omit?: PoliOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliInclude<ExtArgs> | null
  }


  /**
   * Model Dokter
   */

  export type AggregateDokter = {
    _count: DokterCountAggregateOutputType | null
    _avg: DokterAvgAggregateOutputType | null
    _sum: DokterSumAggregateOutputType | null
    _min: DokterMinAggregateOutputType | null
    _max: DokterMaxAggregateOutputType | null
  }

  export type DokterAvgAggregateOutputType = {
    id: number | null
    poliId: number | null
  }

  export type DokterSumAggregateOutputType = {
    id: number | null
    poliId: number | null
  }

  export type DokterMinAggregateOutputType = {
    id: number | null
    nama: string | null
    spesialis: string | null
    foto: string | null
    poliId: number | null
    createdAt: Date | null
  }

  export type DokterMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    spesialis: string | null
    foto: string | null
    poliId: number | null
    createdAt: Date | null
  }

  export type DokterCountAggregateOutputType = {
    id: number
    nama: number
    spesialis: number
    foto: number
    poliId: number
    createdAt: number
    _all: number
  }


  export type DokterAvgAggregateInputType = {
    id?: true
    poliId?: true
  }

  export type DokterSumAggregateInputType = {
    id?: true
    poliId?: true
  }

  export type DokterMinAggregateInputType = {
    id?: true
    nama?: true
    spesialis?: true
    foto?: true
    poliId?: true
    createdAt?: true
  }

  export type DokterMaxAggregateInputType = {
    id?: true
    nama?: true
    spesialis?: true
    foto?: true
    poliId?: true
    createdAt?: true
  }

  export type DokterCountAggregateInputType = {
    id?: true
    nama?: true
    spesialis?: true
    foto?: true
    poliId?: true
    createdAt?: true
    _all?: true
  }

  export type DokterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dokter to aggregate.
     */
    where?: DokterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dokters to fetch.
     */
    orderBy?: DokterOrderByWithRelationInput | DokterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DokterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dokters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dokters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dokters
    **/
    _count?: true | DokterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DokterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DokterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DokterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DokterMaxAggregateInputType
  }

  export type GetDokterAggregateType<T extends DokterAggregateArgs> = {
        [P in keyof T & keyof AggregateDokter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDokter[P]>
      : GetScalarType<T[P], AggregateDokter[P]>
  }




  export type DokterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DokterWhereInput
    orderBy?: DokterOrderByWithAggregationInput | DokterOrderByWithAggregationInput[]
    by: DokterScalarFieldEnum[] | DokterScalarFieldEnum
    having?: DokterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DokterCountAggregateInputType | true
    _avg?: DokterAvgAggregateInputType
    _sum?: DokterSumAggregateInputType
    _min?: DokterMinAggregateInputType
    _max?: DokterMaxAggregateInputType
  }

  export type DokterGroupByOutputType = {
    id: number
    nama: string
    spesialis: string
    foto: string | null
    poliId: number
    createdAt: Date
    _count: DokterCountAggregateOutputType | null
    _avg: DokterAvgAggregateOutputType | null
    _sum: DokterSumAggregateOutputType | null
    _min: DokterMinAggregateOutputType | null
    _max: DokterMaxAggregateOutputType | null
  }

  type GetDokterGroupByPayload<T extends DokterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DokterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DokterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DokterGroupByOutputType[P]>
            : GetScalarType<T[P], DokterGroupByOutputType[P]>
        }
      >
    >


  export type DokterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    spesialis?: boolean
    foto?: boolean
    poliId?: boolean
    createdAt?: boolean
    poli?: boolean | PoliDefaultArgs<ExtArgs>
    jadwal?: boolean | Dokter$jadwalArgs<ExtArgs>
    _count?: boolean | DokterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dokter"]>

  export type DokterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    spesialis?: boolean
    foto?: boolean
    poliId?: boolean
    createdAt?: boolean
    poli?: boolean | PoliDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dokter"]>

  export type DokterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    spesialis?: boolean
    foto?: boolean
    poliId?: boolean
    createdAt?: boolean
    poli?: boolean | PoliDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dokter"]>

  export type DokterSelectScalar = {
    id?: boolean
    nama?: boolean
    spesialis?: boolean
    foto?: boolean
    poliId?: boolean
    createdAt?: boolean
  }

  export type DokterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "spesialis" | "foto" | "poliId" | "createdAt", ExtArgs["result"]["dokter"]>
  export type DokterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poli?: boolean | PoliDefaultArgs<ExtArgs>
    jadwal?: boolean | Dokter$jadwalArgs<ExtArgs>
    _count?: boolean | DokterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DokterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poli?: boolean | PoliDefaultArgs<ExtArgs>
  }
  export type DokterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poli?: boolean | PoliDefaultArgs<ExtArgs>
  }

  export type $DokterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dokter"
    objects: {
      poli: Prisma.$PoliPayload<ExtArgs>
      jadwal: Prisma.$JadwalDokterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      spesialis: string
      foto: string | null
      poliId: number
      createdAt: Date
    }, ExtArgs["result"]["dokter"]>
    composites: {}
  }

  type DokterGetPayload<S extends boolean | null | undefined | DokterDefaultArgs> = $Result.GetResult<Prisma.$DokterPayload, S>

  type DokterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DokterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DokterCountAggregateInputType | true
    }

  export interface DokterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dokter'], meta: { name: 'Dokter' } }
    /**
     * Find zero or one Dokter that matches the filter.
     * @param {DokterFindUniqueArgs} args - Arguments to find a Dokter
     * @example
     * // Get one Dokter
     * const dokter = await prisma.dokter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DokterFindUniqueArgs>(args: SelectSubset<T, DokterFindUniqueArgs<ExtArgs>>): Prisma__DokterClient<$Result.GetResult<Prisma.$DokterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dokter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DokterFindUniqueOrThrowArgs} args - Arguments to find a Dokter
     * @example
     * // Get one Dokter
     * const dokter = await prisma.dokter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DokterFindUniqueOrThrowArgs>(args: SelectSubset<T, DokterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DokterClient<$Result.GetResult<Prisma.$DokterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dokter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokterFindFirstArgs} args - Arguments to find a Dokter
     * @example
     * // Get one Dokter
     * const dokter = await prisma.dokter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DokterFindFirstArgs>(args?: SelectSubset<T, DokterFindFirstArgs<ExtArgs>>): Prisma__DokterClient<$Result.GetResult<Prisma.$DokterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dokter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokterFindFirstOrThrowArgs} args - Arguments to find a Dokter
     * @example
     * // Get one Dokter
     * const dokter = await prisma.dokter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DokterFindFirstOrThrowArgs>(args?: SelectSubset<T, DokterFindFirstOrThrowArgs<ExtArgs>>): Prisma__DokterClient<$Result.GetResult<Prisma.$DokterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dokters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dokters
     * const dokters = await prisma.dokter.findMany()
     * 
     * // Get first 10 Dokters
     * const dokters = await prisma.dokter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dokterWithIdOnly = await prisma.dokter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DokterFindManyArgs>(args?: SelectSubset<T, DokterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DokterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dokter.
     * @param {DokterCreateArgs} args - Arguments to create a Dokter.
     * @example
     * // Create one Dokter
     * const Dokter = await prisma.dokter.create({
     *   data: {
     *     // ... data to create a Dokter
     *   }
     * })
     * 
     */
    create<T extends DokterCreateArgs>(args: SelectSubset<T, DokterCreateArgs<ExtArgs>>): Prisma__DokterClient<$Result.GetResult<Prisma.$DokterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dokters.
     * @param {DokterCreateManyArgs} args - Arguments to create many Dokters.
     * @example
     * // Create many Dokters
     * const dokter = await prisma.dokter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DokterCreateManyArgs>(args?: SelectSubset<T, DokterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dokters and returns the data saved in the database.
     * @param {DokterCreateManyAndReturnArgs} args - Arguments to create many Dokters.
     * @example
     * // Create many Dokters
     * const dokter = await prisma.dokter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dokters and only return the `id`
     * const dokterWithIdOnly = await prisma.dokter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DokterCreateManyAndReturnArgs>(args?: SelectSubset<T, DokterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DokterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dokter.
     * @param {DokterDeleteArgs} args - Arguments to delete one Dokter.
     * @example
     * // Delete one Dokter
     * const Dokter = await prisma.dokter.delete({
     *   where: {
     *     // ... filter to delete one Dokter
     *   }
     * })
     * 
     */
    delete<T extends DokterDeleteArgs>(args: SelectSubset<T, DokterDeleteArgs<ExtArgs>>): Prisma__DokterClient<$Result.GetResult<Prisma.$DokterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dokter.
     * @param {DokterUpdateArgs} args - Arguments to update one Dokter.
     * @example
     * // Update one Dokter
     * const dokter = await prisma.dokter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DokterUpdateArgs>(args: SelectSubset<T, DokterUpdateArgs<ExtArgs>>): Prisma__DokterClient<$Result.GetResult<Prisma.$DokterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dokters.
     * @param {DokterDeleteManyArgs} args - Arguments to filter Dokters to delete.
     * @example
     * // Delete a few Dokters
     * const { count } = await prisma.dokter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DokterDeleteManyArgs>(args?: SelectSubset<T, DokterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dokters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dokters
     * const dokter = await prisma.dokter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DokterUpdateManyArgs>(args: SelectSubset<T, DokterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dokters and returns the data updated in the database.
     * @param {DokterUpdateManyAndReturnArgs} args - Arguments to update many Dokters.
     * @example
     * // Update many Dokters
     * const dokter = await prisma.dokter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dokters and only return the `id`
     * const dokterWithIdOnly = await prisma.dokter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DokterUpdateManyAndReturnArgs>(args: SelectSubset<T, DokterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DokterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dokter.
     * @param {DokterUpsertArgs} args - Arguments to update or create a Dokter.
     * @example
     * // Update or create a Dokter
     * const dokter = await prisma.dokter.upsert({
     *   create: {
     *     // ... data to create a Dokter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dokter we want to update
     *   }
     * })
     */
    upsert<T extends DokterUpsertArgs>(args: SelectSubset<T, DokterUpsertArgs<ExtArgs>>): Prisma__DokterClient<$Result.GetResult<Prisma.$DokterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dokters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokterCountArgs} args - Arguments to filter Dokters to count.
     * @example
     * // Count the number of Dokters
     * const count = await prisma.dokter.count({
     *   where: {
     *     // ... the filter for the Dokters we want to count
     *   }
     * })
    **/
    count<T extends DokterCountArgs>(
      args?: Subset<T, DokterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DokterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dokter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DokterAggregateArgs>(args: Subset<T, DokterAggregateArgs>): Prisma.PrismaPromise<GetDokterAggregateType<T>>

    /**
     * Group by Dokter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DokterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DokterGroupByArgs['orderBy'] }
        : { orderBy?: DokterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DokterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDokterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dokter model
   */
  readonly fields: DokterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dokter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DokterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    poli<T extends PoliDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PoliDefaultArgs<ExtArgs>>): Prisma__PoliClient<$Result.GetResult<Prisma.$PoliPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    jadwal<T extends Dokter$jadwalArgs<ExtArgs> = {}>(args?: Subset<T, Dokter$jadwalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalDokterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dokter model
   */
  interface DokterFieldRefs {
    readonly id: FieldRef<"Dokter", 'Int'>
    readonly nama: FieldRef<"Dokter", 'String'>
    readonly spesialis: FieldRef<"Dokter", 'String'>
    readonly foto: FieldRef<"Dokter", 'String'>
    readonly poliId: FieldRef<"Dokter", 'Int'>
    readonly createdAt: FieldRef<"Dokter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dokter findUnique
   */
  export type DokterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokter
     */
    select?: DokterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokter
     */
    omit?: DokterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokterInclude<ExtArgs> | null
    /**
     * Filter, which Dokter to fetch.
     */
    where: DokterWhereUniqueInput
  }

  /**
   * Dokter findUniqueOrThrow
   */
  export type DokterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokter
     */
    select?: DokterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokter
     */
    omit?: DokterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokterInclude<ExtArgs> | null
    /**
     * Filter, which Dokter to fetch.
     */
    where: DokterWhereUniqueInput
  }

  /**
   * Dokter findFirst
   */
  export type DokterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokter
     */
    select?: DokterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokter
     */
    omit?: DokterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokterInclude<ExtArgs> | null
    /**
     * Filter, which Dokter to fetch.
     */
    where?: DokterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dokters to fetch.
     */
    orderBy?: DokterOrderByWithRelationInput | DokterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dokters.
     */
    cursor?: DokterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dokters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dokters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dokters.
     */
    distinct?: DokterScalarFieldEnum | DokterScalarFieldEnum[]
  }

  /**
   * Dokter findFirstOrThrow
   */
  export type DokterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokter
     */
    select?: DokterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokter
     */
    omit?: DokterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokterInclude<ExtArgs> | null
    /**
     * Filter, which Dokter to fetch.
     */
    where?: DokterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dokters to fetch.
     */
    orderBy?: DokterOrderByWithRelationInput | DokterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dokters.
     */
    cursor?: DokterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dokters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dokters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dokters.
     */
    distinct?: DokterScalarFieldEnum | DokterScalarFieldEnum[]
  }

  /**
   * Dokter findMany
   */
  export type DokterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokter
     */
    select?: DokterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokter
     */
    omit?: DokterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokterInclude<ExtArgs> | null
    /**
     * Filter, which Dokters to fetch.
     */
    where?: DokterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dokters to fetch.
     */
    orderBy?: DokterOrderByWithRelationInput | DokterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dokters.
     */
    cursor?: DokterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dokters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dokters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dokters.
     */
    distinct?: DokterScalarFieldEnum | DokterScalarFieldEnum[]
  }

  /**
   * Dokter create
   */
  export type DokterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokter
     */
    select?: DokterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokter
     */
    omit?: DokterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokterInclude<ExtArgs> | null
    /**
     * The data needed to create a Dokter.
     */
    data: XOR<DokterCreateInput, DokterUncheckedCreateInput>
  }

  /**
   * Dokter createMany
   */
  export type DokterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dokters.
     */
    data: DokterCreateManyInput | DokterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dokter createManyAndReturn
   */
  export type DokterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokter
     */
    select?: DokterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dokter
     */
    omit?: DokterOmit<ExtArgs> | null
    /**
     * The data used to create many Dokters.
     */
    data: DokterCreateManyInput | DokterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dokter update
   */
  export type DokterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokter
     */
    select?: DokterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokter
     */
    omit?: DokterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokterInclude<ExtArgs> | null
    /**
     * The data needed to update a Dokter.
     */
    data: XOR<DokterUpdateInput, DokterUncheckedUpdateInput>
    /**
     * Choose, which Dokter to update.
     */
    where: DokterWhereUniqueInput
  }

  /**
   * Dokter updateMany
   */
  export type DokterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dokters.
     */
    data: XOR<DokterUpdateManyMutationInput, DokterUncheckedUpdateManyInput>
    /**
     * Filter which Dokters to update
     */
    where?: DokterWhereInput
    /**
     * Limit how many Dokters to update.
     */
    limit?: number
  }

  /**
   * Dokter updateManyAndReturn
   */
  export type DokterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokter
     */
    select?: DokterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dokter
     */
    omit?: DokterOmit<ExtArgs> | null
    /**
     * The data used to update Dokters.
     */
    data: XOR<DokterUpdateManyMutationInput, DokterUncheckedUpdateManyInput>
    /**
     * Filter which Dokters to update
     */
    where?: DokterWhereInput
    /**
     * Limit how many Dokters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dokter upsert
   */
  export type DokterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokter
     */
    select?: DokterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokter
     */
    omit?: DokterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokterInclude<ExtArgs> | null
    /**
     * The filter to search for the Dokter to update in case it exists.
     */
    where: DokterWhereUniqueInput
    /**
     * In case the Dokter found by the `where` argument doesn't exist, create a new Dokter with this data.
     */
    create: XOR<DokterCreateInput, DokterUncheckedCreateInput>
    /**
     * In case the Dokter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DokterUpdateInput, DokterUncheckedUpdateInput>
  }

  /**
   * Dokter delete
   */
  export type DokterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokter
     */
    select?: DokterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokter
     */
    omit?: DokterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokterInclude<ExtArgs> | null
    /**
     * Filter which Dokter to delete.
     */
    where: DokterWhereUniqueInput
  }

  /**
   * Dokter deleteMany
   */
  export type DokterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dokters to delete
     */
    where?: DokterWhereInput
    /**
     * Limit how many Dokters to delete.
     */
    limit?: number
  }

  /**
   * Dokter.jadwal
   */
  export type Dokter$jadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalDokter
     */
    select?: JadwalDokterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalDokter
     */
    omit?: JadwalDokterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalDokterInclude<ExtArgs> | null
    where?: JadwalDokterWhereInput
    orderBy?: JadwalDokterOrderByWithRelationInput | JadwalDokterOrderByWithRelationInput[]
    cursor?: JadwalDokterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JadwalDokterScalarFieldEnum | JadwalDokterScalarFieldEnum[]
  }

  /**
   * Dokter without action
   */
  export type DokterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokter
     */
    select?: DokterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokter
     */
    omit?: DokterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokterInclude<ExtArgs> | null
  }


  /**
   * Model JadwalDokter
   */

  export type AggregateJadwalDokter = {
    _count: JadwalDokterCountAggregateOutputType | null
    _avg: JadwalDokterAvgAggregateOutputType | null
    _sum: JadwalDokterSumAggregateOutputType | null
    _min: JadwalDokterMinAggregateOutputType | null
    _max: JadwalDokterMaxAggregateOutputType | null
  }

  export type JadwalDokterAvgAggregateOutputType = {
    id: number | null
    dokterId: number | null
  }

  export type JadwalDokterSumAggregateOutputType = {
    id: number | null
    dokterId: number | null
  }

  export type JadwalDokterMinAggregateOutputType = {
    id: number | null
    dokterId: number | null
    hari: $Enums.Hari | null
    jamMulai: string | null
    jamSelesai: string | null
    createdAt: Date | null
  }

  export type JadwalDokterMaxAggregateOutputType = {
    id: number | null
    dokterId: number | null
    hari: $Enums.Hari | null
    jamMulai: string | null
    jamSelesai: string | null
    createdAt: Date | null
  }

  export type JadwalDokterCountAggregateOutputType = {
    id: number
    dokterId: number
    hari: number
    jamMulai: number
    jamSelesai: number
    createdAt: number
    _all: number
  }


  export type JadwalDokterAvgAggregateInputType = {
    id?: true
    dokterId?: true
  }

  export type JadwalDokterSumAggregateInputType = {
    id?: true
    dokterId?: true
  }

  export type JadwalDokterMinAggregateInputType = {
    id?: true
    dokterId?: true
    hari?: true
    jamMulai?: true
    jamSelesai?: true
    createdAt?: true
  }

  export type JadwalDokterMaxAggregateInputType = {
    id?: true
    dokterId?: true
    hari?: true
    jamMulai?: true
    jamSelesai?: true
    createdAt?: true
  }

  export type JadwalDokterCountAggregateInputType = {
    id?: true
    dokterId?: true
    hari?: true
    jamMulai?: true
    jamSelesai?: true
    createdAt?: true
    _all?: true
  }

  export type JadwalDokterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JadwalDokter to aggregate.
     */
    where?: JadwalDokterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JadwalDokters to fetch.
     */
    orderBy?: JadwalDokterOrderByWithRelationInput | JadwalDokterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JadwalDokterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JadwalDokters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JadwalDokters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JadwalDokters
    **/
    _count?: true | JadwalDokterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JadwalDokterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JadwalDokterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JadwalDokterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JadwalDokterMaxAggregateInputType
  }

  export type GetJadwalDokterAggregateType<T extends JadwalDokterAggregateArgs> = {
        [P in keyof T & keyof AggregateJadwalDokter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJadwalDokter[P]>
      : GetScalarType<T[P], AggregateJadwalDokter[P]>
  }




  export type JadwalDokterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JadwalDokterWhereInput
    orderBy?: JadwalDokterOrderByWithAggregationInput | JadwalDokterOrderByWithAggregationInput[]
    by: JadwalDokterScalarFieldEnum[] | JadwalDokterScalarFieldEnum
    having?: JadwalDokterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JadwalDokterCountAggregateInputType | true
    _avg?: JadwalDokterAvgAggregateInputType
    _sum?: JadwalDokterSumAggregateInputType
    _min?: JadwalDokterMinAggregateInputType
    _max?: JadwalDokterMaxAggregateInputType
  }

  export type JadwalDokterGroupByOutputType = {
    id: number
    dokterId: number
    hari: $Enums.Hari
    jamMulai: string
    jamSelesai: string
    createdAt: Date
    _count: JadwalDokterCountAggregateOutputType | null
    _avg: JadwalDokterAvgAggregateOutputType | null
    _sum: JadwalDokterSumAggregateOutputType | null
    _min: JadwalDokterMinAggregateOutputType | null
    _max: JadwalDokterMaxAggregateOutputType | null
  }

  type GetJadwalDokterGroupByPayload<T extends JadwalDokterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JadwalDokterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JadwalDokterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JadwalDokterGroupByOutputType[P]>
            : GetScalarType<T[P], JadwalDokterGroupByOutputType[P]>
        }
      >
    >


  export type JadwalDokterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dokterId?: boolean
    hari?: boolean
    jamMulai?: boolean
    jamSelesai?: boolean
    createdAt?: boolean
    dokter?: boolean | DokterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jadwalDokter"]>

  export type JadwalDokterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dokterId?: boolean
    hari?: boolean
    jamMulai?: boolean
    jamSelesai?: boolean
    createdAt?: boolean
    dokter?: boolean | DokterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jadwalDokter"]>

  export type JadwalDokterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dokterId?: boolean
    hari?: boolean
    jamMulai?: boolean
    jamSelesai?: boolean
    createdAt?: boolean
    dokter?: boolean | DokterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jadwalDokter"]>

  export type JadwalDokterSelectScalar = {
    id?: boolean
    dokterId?: boolean
    hari?: boolean
    jamMulai?: boolean
    jamSelesai?: boolean
    createdAt?: boolean
  }

  export type JadwalDokterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dokterId" | "hari" | "jamMulai" | "jamSelesai" | "createdAt", ExtArgs["result"]["jadwalDokter"]>
  export type JadwalDokterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dokter?: boolean | DokterDefaultArgs<ExtArgs>
  }
  export type JadwalDokterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dokter?: boolean | DokterDefaultArgs<ExtArgs>
  }
  export type JadwalDokterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dokter?: boolean | DokterDefaultArgs<ExtArgs>
  }

  export type $JadwalDokterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JadwalDokter"
    objects: {
      dokter: Prisma.$DokterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dokterId: number
      hari: $Enums.Hari
      jamMulai: string
      jamSelesai: string
      createdAt: Date
    }, ExtArgs["result"]["jadwalDokter"]>
    composites: {}
  }

  type JadwalDokterGetPayload<S extends boolean | null | undefined | JadwalDokterDefaultArgs> = $Result.GetResult<Prisma.$JadwalDokterPayload, S>

  type JadwalDokterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JadwalDokterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JadwalDokterCountAggregateInputType | true
    }

  export interface JadwalDokterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JadwalDokter'], meta: { name: 'JadwalDokter' } }
    /**
     * Find zero or one JadwalDokter that matches the filter.
     * @param {JadwalDokterFindUniqueArgs} args - Arguments to find a JadwalDokter
     * @example
     * // Get one JadwalDokter
     * const jadwalDokter = await prisma.jadwalDokter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JadwalDokterFindUniqueArgs>(args: SelectSubset<T, JadwalDokterFindUniqueArgs<ExtArgs>>): Prisma__JadwalDokterClient<$Result.GetResult<Prisma.$JadwalDokterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JadwalDokter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JadwalDokterFindUniqueOrThrowArgs} args - Arguments to find a JadwalDokter
     * @example
     * // Get one JadwalDokter
     * const jadwalDokter = await prisma.jadwalDokter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JadwalDokterFindUniqueOrThrowArgs>(args: SelectSubset<T, JadwalDokterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JadwalDokterClient<$Result.GetResult<Prisma.$JadwalDokterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JadwalDokter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalDokterFindFirstArgs} args - Arguments to find a JadwalDokter
     * @example
     * // Get one JadwalDokter
     * const jadwalDokter = await prisma.jadwalDokter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JadwalDokterFindFirstArgs>(args?: SelectSubset<T, JadwalDokterFindFirstArgs<ExtArgs>>): Prisma__JadwalDokterClient<$Result.GetResult<Prisma.$JadwalDokterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JadwalDokter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalDokterFindFirstOrThrowArgs} args - Arguments to find a JadwalDokter
     * @example
     * // Get one JadwalDokter
     * const jadwalDokter = await prisma.jadwalDokter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JadwalDokterFindFirstOrThrowArgs>(args?: SelectSubset<T, JadwalDokterFindFirstOrThrowArgs<ExtArgs>>): Prisma__JadwalDokterClient<$Result.GetResult<Prisma.$JadwalDokterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JadwalDokters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalDokterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JadwalDokters
     * const jadwalDokters = await prisma.jadwalDokter.findMany()
     * 
     * // Get first 10 JadwalDokters
     * const jadwalDokters = await prisma.jadwalDokter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jadwalDokterWithIdOnly = await prisma.jadwalDokter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JadwalDokterFindManyArgs>(args?: SelectSubset<T, JadwalDokterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalDokterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JadwalDokter.
     * @param {JadwalDokterCreateArgs} args - Arguments to create a JadwalDokter.
     * @example
     * // Create one JadwalDokter
     * const JadwalDokter = await prisma.jadwalDokter.create({
     *   data: {
     *     // ... data to create a JadwalDokter
     *   }
     * })
     * 
     */
    create<T extends JadwalDokterCreateArgs>(args: SelectSubset<T, JadwalDokterCreateArgs<ExtArgs>>): Prisma__JadwalDokterClient<$Result.GetResult<Prisma.$JadwalDokterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JadwalDokters.
     * @param {JadwalDokterCreateManyArgs} args - Arguments to create many JadwalDokters.
     * @example
     * // Create many JadwalDokters
     * const jadwalDokter = await prisma.jadwalDokter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JadwalDokterCreateManyArgs>(args?: SelectSubset<T, JadwalDokterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JadwalDokters and returns the data saved in the database.
     * @param {JadwalDokterCreateManyAndReturnArgs} args - Arguments to create many JadwalDokters.
     * @example
     * // Create many JadwalDokters
     * const jadwalDokter = await prisma.jadwalDokter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JadwalDokters and only return the `id`
     * const jadwalDokterWithIdOnly = await prisma.jadwalDokter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JadwalDokterCreateManyAndReturnArgs>(args?: SelectSubset<T, JadwalDokterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalDokterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JadwalDokter.
     * @param {JadwalDokterDeleteArgs} args - Arguments to delete one JadwalDokter.
     * @example
     * // Delete one JadwalDokter
     * const JadwalDokter = await prisma.jadwalDokter.delete({
     *   where: {
     *     // ... filter to delete one JadwalDokter
     *   }
     * })
     * 
     */
    delete<T extends JadwalDokterDeleteArgs>(args: SelectSubset<T, JadwalDokterDeleteArgs<ExtArgs>>): Prisma__JadwalDokterClient<$Result.GetResult<Prisma.$JadwalDokterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JadwalDokter.
     * @param {JadwalDokterUpdateArgs} args - Arguments to update one JadwalDokter.
     * @example
     * // Update one JadwalDokter
     * const jadwalDokter = await prisma.jadwalDokter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JadwalDokterUpdateArgs>(args: SelectSubset<T, JadwalDokterUpdateArgs<ExtArgs>>): Prisma__JadwalDokterClient<$Result.GetResult<Prisma.$JadwalDokterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JadwalDokters.
     * @param {JadwalDokterDeleteManyArgs} args - Arguments to filter JadwalDokters to delete.
     * @example
     * // Delete a few JadwalDokters
     * const { count } = await prisma.jadwalDokter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JadwalDokterDeleteManyArgs>(args?: SelectSubset<T, JadwalDokterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JadwalDokters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalDokterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JadwalDokters
     * const jadwalDokter = await prisma.jadwalDokter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JadwalDokterUpdateManyArgs>(args: SelectSubset<T, JadwalDokterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JadwalDokters and returns the data updated in the database.
     * @param {JadwalDokterUpdateManyAndReturnArgs} args - Arguments to update many JadwalDokters.
     * @example
     * // Update many JadwalDokters
     * const jadwalDokter = await prisma.jadwalDokter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JadwalDokters and only return the `id`
     * const jadwalDokterWithIdOnly = await prisma.jadwalDokter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JadwalDokterUpdateManyAndReturnArgs>(args: SelectSubset<T, JadwalDokterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalDokterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JadwalDokter.
     * @param {JadwalDokterUpsertArgs} args - Arguments to update or create a JadwalDokter.
     * @example
     * // Update or create a JadwalDokter
     * const jadwalDokter = await prisma.jadwalDokter.upsert({
     *   create: {
     *     // ... data to create a JadwalDokter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JadwalDokter we want to update
     *   }
     * })
     */
    upsert<T extends JadwalDokterUpsertArgs>(args: SelectSubset<T, JadwalDokterUpsertArgs<ExtArgs>>): Prisma__JadwalDokterClient<$Result.GetResult<Prisma.$JadwalDokterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JadwalDokters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalDokterCountArgs} args - Arguments to filter JadwalDokters to count.
     * @example
     * // Count the number of JadwalDokters
     * const count = await prisma.jadwalDokter.count({
     *   where: {
     *     // ... the filter for the JadwalDokters we want to count
     *   }
     * })
    **/
    count<T extends JadwalDokterCountArgs>(
      args?: Subset<T, JadwalDokterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JadwalDokterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JadwalDokter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalDokterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JadwalDokterAggregateArgs>(args: Subset<T, JadwalDokterAggregateArgs>): Prisma.PrismaPromise<GetJadwalDokterAggregateType<T>>

    /**
     * Group by JadwalDokter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalDokterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JadwalDokterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JadwalDokterGroupByArgs['orderBy'] }
        : { orderBy?: JadwalDokterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JadwalDokterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJadwalDokterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JadwalDokter model
   */
  readonly fields: JadwalDokterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JadwalDokter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JadwalDokterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dokter<T extends DokterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DokterDefaultArgs<ExtArgs>>): Prisma__DokterClient<$Result.GetResult<Prisma.$DokterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JadwalDokter model
   */
  interface JadwalDokterFieldRefs {
    readonly id: FieldRef<"JadwalDokter", 'Int'>
    readonly dokterId: FieldRef<"JadwalDokter", 'Int'>
    readonly hari: FieldRef<"JadwalDokter", 'Hari'>
    readonly jamMulai: FieldRef<"JadwalDokter", 'String'>
    readonly jamSelesai: FieldRef<"JadwalDokter", 'String'>
    readonly createdAt: FieldRef<"JadwalDokter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JadwalDokter findUnique
   */
  export type JadwalDokterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalDokter
     */
    select?: JadwalDokterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalDokter
     */
    omit?: JadwalDokterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalDokterInclude<ExtArgs> | null
    /**
     * Filter, which JadwalDokter to fetch.
     */
    where: JadwalDokterWhereUniqueInput
  }

  /**
   * JadwalDokter findUniqueOrThrow
   */
  export type JadwalDokterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalDokter
     */
    select?: JadwalDokterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalDokter
     */
    omit?: JadwalDokterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalDokterInclude<ExtArgs> | null
    /**
     * Filter, which JadwalDokter to fetch.
     */
    where: JadwalDokterWhereUniqueInput
  }

  /**
   * JadwalDokter findFirst
   */
  export type JadwalDokterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalDokter
     */
    select?: JadwalDokterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalDokter
     */
    omit?: JadwalDokterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalDokterInclude<ExtArgs> | null
    /**
     * Filter, which JadwalDokter to fetch.
     */
    where?: JadwalDokterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JadwalDokters to fetch.
     */
    orderBy?: JadwalDokterOrderByWithRelationInput | JadwalDokterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JadwalDokters.
     */
    cursor?: JadwalDokterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JadwalDokters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JadwalDokters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JadwalDokters.
     */
    distinct?: JadwalDokterScalarFieldEnum | JadwalDokterScalarFieldEnum[]
  }

  /**
   * JadwalDokter findFirstOrThrow
   */
  export type JadwalDokterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalDokter
     */
    select?: JadwalDokterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalDokter
     */
    omit?: JadwalDokterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalDokterInclude<ExtArgs> | null
    /**
     * Filter, which JadwalDokter to fetch.
     */
    where?: JadwalDokterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JadwalDokters to fetch.
     */
    orderBy?: JadwalDokterOrderByWithRelationInput | JadwalDokterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JadwalDokters.
     */
    cursor?: JadwalDokterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JadwalDokters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JadwalDokters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JadwalDokters.
     */
    distinct?: JadwalDokterScalarFieldEnum | JadwalDokterScalarFieldEnum[]
  }

  /**
   * JadwalDokter findMany
   */
  export type JadwalDokterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalDokter
     */
    select?: JadwalDokterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalDokter
     */
    omit?: JadwalDokterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalDokterInclude<ExtArgs> | null
    /**
     * Filter, which JadwalDokters to fetch.
     */
    where?: JadwalDokterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JadwalDokters to fetch.
     */
    orderBy?: JadwalDokterOrderByWithRelationInput | JadwalDokterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JadwalDokters.
     */
    cursor?: JadwalDokterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JadwalDokters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JadwalDokters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JadwalDokters.
     */
    distinct?: JadwalDokterScalarFieldEnum | JadwalDokterScalarFieldEnum[]
  }

  /**
   * JadwalDokter create
   */
  export type JadwalDokterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalDokter
     */
    select?: JadwalDokterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalDokter
     */
    omit?: JadwalDokterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalDokterInclude<ExtArgs> | null
    /**
     * The data needed to create a JadwalDokter.
     */
    data: XOR<JadwalDokterCreateInput, JadwalDokterUncheckedCreateInput>
  }

  /**
   * JadwalDokter createMany
   */
  export type JadwalDokterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JadwalDokters.
     */
    data: JadwalDokterCreateManyInput | JadwalDokterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JadwalDokter createManyAndReturn
   */
  export type JadwalDokterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalDokter
     */
    select?: JadwalDokterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalDokter
     */
    omit?: JadwalDokterOmit<ExtArgs> | null
    /**
     * The data used to create many JadwalDokters.
     */
    data: JadwalDokterCreateManyInput | JadwalDokterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalDokterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JadwalDokter update
   */
  export type JadwalDokterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalDokter
     */
    select?: JadwalDokterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalDokter
     */
    omit?: JadwalDokterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalDokterInclude<ExtArgs> | null
    /**
     * The data needed to update a JadwalDokter.
     */
    data: XOR<JadwalDokterUpdateInput, JadwalDokterUncheckedUpdateInput>
    /**
     * Choose, which JadwalDokter to update.
     */
    where: JadwalDokterWhereUniqueInput
  }

  /**
   * JadwalDokter updateMany
   */
  export type JadwalDokterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JadwalDokters.
     */
    data: XOR<JadwalDokterUpdateManyMutationInput, JadwalDokterUncheckedUpdateManyInput>
    /**
     * Filter which JadwalDokters to update
     */
    where?: JadwalDokterWhereInput
    /**
     * Limit how many JadwalDokters to update.
     */
    limit?: number
  }

  /**
   * JadwalDokter updateManyAndReturn
   */
  export type JadwalDokterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalDokter
     */
    select?: JadwalDokterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalDokter
     */
    omit?: JadwalDokterOmit<ExtArgs> | null
    /**
     * The data used to update JadwalDokters.
     */
    data: XOR<JadwalDokterUpdateManyMutationInput, JadwalDokterUncheckedUpdateManyInput>
    /**
     * Filter which JadwalDokters to update
     */
    where?: JadwalDokterWhereInput
    /**
     * Limit how many JadwalDokters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalDokterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JadwalDokter upsert
   */
  export type JadwalDokterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalDokter
     */
    select?: JadwalDokterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalDokter
     */
    omit?: JadwalDokterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalDokterInclude<ExtArgs> | null
    /**
     * The filter to search for the JadwalDokter to update in case it exists.
     */
    where: JadwalDokterWhereUniqueInput
    /**
     * In case the JadwalDokter found by the `where` argument doesn't exist, create a new JadwalDokter with this data.
     */
    create: XOR<JadwalDokterCreateInput, JadwalDokterUncheckedCreateInput>
    /**
     * In case the JadwalDokter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JadwalDokterUpdateInput, JadwalDokterUncheckedUpdateInput>
  }

  /**
   * JadwalDokter delete
   */
  export type JadwalDokterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalDokter
     */
    select?: JadwalDokterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalDokter
     */
    omit?: JadwalDokterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalDokterInclude<ExtArgs> | null
    /**
     * Filter which JadwalDokter to delete.
     */
    where: JadwalDokterWhereUniqueInput
  }

  /**
   * JadwalDokter deleteMany
   */
  export type JadwalDokterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JadwalDokters to delete
     */
    where?: JadwalDokterWhereInput
    /**
     * Limit how many JadwalDokters to delete.
     */
    limit?: number
  }

  /**
   * JadwalDokter without action
   */
  export type JadwalDokterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalDokter
     */
    select?: JadwalDokterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalDokter
     */
    omit?: JadwalDokterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalDokterInclude<ExtArgs> | null
  }


  /**
   * Model Berita
   */

  export type AggregateBerita = {
    _count: BeritaCountAggregateOutputType | null
    _avg: BeritaAvgAggregateOutputType | null
    _sum: BeritaSumAggregateOutputType | null
    _min: BeritaMinAggregateOutputType | null
    _max: BeritaMaxAggregateOutputType | null
  }

  export type BeritaAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type BeritaSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type BeritaMinAggregateOutputType = {
    id: number | null
    judul: string | null
    isi: string | null
    gambar: string | null
    tanggal: Date | null
    userId: number | null
    createdAt: Date | null
  }

  export type BeritaMaxAggregateOutputType = {
    id: number | null
    judul: string | null
    isi: string | null
    gambar: string | null
    tanggal: Date | null
    userId: number | null
    createdAt: Date | null
  }

  export type BeritaCountAggregateOutputType = {
    id: number
    judul: number
    isi: number
    gambar: number
    tanggal: number
    userId: number
    createdAt: number
    _all: number
  }


  export type BeritaAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type BeritaSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type BeritaMinAggregateInputType = {
    id?: true
    judul?: true
    isi?: true
    gambar?: true
    tanggal?: true
    userId?: true
    createdAt?: true
  }

  export type BeritaMaxAggregateInputType = {
    id?: true
    judul?: true
    isi?: true
    gambar?: true
    tanggal?: true
    userId?: true
    createdAt?: true
  }

  export type BeritaCountAggregateInputType = {
    id?: true
    judul?: true
    isi?: true
    gambar?: true
    tanggal?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type BeritaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Berita to aggregate.
     */
    where?: BeritaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beritas to fetch.
     */
    orderBy?: BeritaOrderByWithRelationInput | BeritaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BeritaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beritas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Beritas
    **/
    _count?: true | BeritaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BeritaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BeritaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BeritaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BeritaMaxAggregateInputType
  }

  export type GetBeritaAggregateType<T extends BeritaAggregateArgs> = {
        [P in keyof T & keyof AggregateBerita]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBerita[P]>
      : GetScalarType<T[P], AggregateBerita[P]>
  }




  export type BeritaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BeritaWhereInput
    orderBy?: BeritaOrderByWithAggregationInput | BeritaOrderByWithAggregationInput[]
    by: BeritaScalarFieldEnum[] | BeritaScalarFieldEnum
    having?: BeritaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BeritaCountAggregateInputType | true
    _avg?: BeritaAvgAggregateInputType
    _sum?: BeritaSumAggregateInputType
    _min?: BeritaMinAggregateInputType
    _max?: BeritaMaxAggregateInputType
  }

  export type BeritaGroupByOutputType = {
    id: number
    judul: string
    isi: string
    gambar: string | null
    tanggal: Date
    userId: number
    createdAt: Date
    _count: BeritaCountAggregateOutputType | null
    _avg: BeritaAvgAggregateOutputType | null
    _sum: BeritaSumAggregateOutputType | null
    _min: BeritaMinAggregateOutputType | null
    _max: BeritaMaxAggregateOutputType | null
  }

  type GetBeritaGroupByPayload<T extends BeritaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BeritaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BeritaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BeritaGroupByOutputType[P]>
            : GetScalarType<T[P], BeritaGroupByOutputType[P]>
        }
      >
    >


  export type BeritaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    isi?: boolean
    gambar?: boolean
    tanggal?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["berita"]>

  export type BeritaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    isi?: boolean
    gambar?: boolean
    tanggal?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["berita"]>

  export type BeritaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    isi?: boolean
    gambar?: boolean
    tanggal?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["berita"]>

  export type BeritaSelectScalar = {
    id?: boolean
    judul?: boolean
    isi?: boolean
    gambar?: boolean
    tanggal?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type BeritaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "judul" | "isi" | "gambar" | "tanggal" | "userId" | "createdAt", ExtArgs["result"]["berita"]>
  export type BeritaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BeritaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BeritaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BeritaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Berita"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      judul: string
      isi: string
      gambar: string | null
      tanggal: Date
      userId: number
      createdAt: Date
    }, ExtArgs["result"]["berita"]>
    composites: {}
  }

  type BeritaGetPayload<S extends boolean | null | undefined | BeritaDefaultArgs> = $Result.GetResult<Prisma.$BeritaPayload, S>

  type BeritaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BeritaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BeritaCountAggregateInputType | true
    }

  export interface BeritaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Berita'], meta: { name: 'Berita' } }
    /**
     * Find zero or one Berita that matches the filter.
     * @param {BeritaFindUniqueArgs} args - Arguments to find a Berita
     * @example
     * // Get one Berita
     * const berita = await prisma.berita.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BeritaFindUniqueArgs>(args: SelectSubset<T, BeritaFindUniqueArgs<ExtArgs>>): Prisma__BeritaClient<$Result.GetResult<Prisma.$BeritaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Berita that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BeritaFindUniqueOrThrowArgs} args - Arguments to find a Berita
     * @example
     * // Get one Berita
     * const berita = await prisma.berita.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BeritaFindUniqueOrThrowArgs>(args: SelectSubset<T, BeritaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BeritaClient<$Result.GetResult<Prisma.$BeritaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Berita that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeritaFindFirstArgs} args - Arguments to find a Berita
     * @example
     * // Get one Berita
     * const berita = await prisma.berita.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BeritaFindFirstArgs>(args?: SelectSubset<T, BeritaFindFirstArgs<ExtArgs>>): Prisma__BeritaClient<$Result.GetResult<Prisma.$BeritaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Berita that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeritaFindFirstOrThrowArgs} args - Arguments to find a Berita
     * @example
     * // Get one Berita
     * const berita = await prisma.berita.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BeritaFindFirstOrThrowArgs>(args?: SelectSubset<T, BeritaFindFirstOrThrowArgs<ExtArgs>>): Prisma__BeritaClient<$Result.GetResult<Prisma.$BeritaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Beritas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeritaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Beritas
     * const beritas = await prisma.berita.findMany()
     * 
     * // Get first 10 Beritas
     * const beritas = await prisma.berita.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const beritaWithIdOnly = await prisma.berita.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BeritaFindManyArgs>(args?: SelectSubset<T, BeritaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeritaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Berita.
     * @param {BeritaCreateArgs} args - Arguments to create a Berita.
     * @example
     * // Create one Berita
     * const Berita = await prisma.berita.create({
     *   data: {
     *     // ... data to create a Berita
     *   }
     * })
     * 
     */
    create<T extends BeritaCreateArgs>(args: SelectSubset<T, BeritaCreateArgs<ExtArgs>>): Prisma__BeritaClient<$Result.GetResult<Prisma.$BeritaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Beritas.
     * @param {BeritaCreateManyArgs} args - Arguments to create many Beritas.
     * @example
     * // Create many Beritas
     * const berita = await prisma.berita.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BeritaCreateManyArgs>(args?: SelectSubset<T, BeritaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Beritas and returns the data saved in the database.
     * @param {BeritaCreateManyAndReturnArgs} args - Arguments to create many Beritas.
     * @example
     * // Create many Beritas
     * const berita = await prisma.berita.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Beritas and only return the `id`
     * const beritaWithIdOnly = await prisma.berita.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BeritaCreateManyAndReturnArgs>(args?: SelectSubset<T, BeritaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeritaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Berita.
     * @param {BeritaDeleteArgs} args - Arguments to delete one Berita.
     * @example
     * // Delete one Berita
     * const Berita = await prisma.berita.delete({
     *   where: {
     *     // ... filter to delete one Berita
     *   }
     * })
     * 
     */
    delete<T extends BeritaDeleteArgs>(args: SelectSubset<T, BeritaDeleteArgs<ExtArgs>>): Prisma__BeritaClient<$Result.GetResult<Prisma.$BeritaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Berita.
     * @param {BeritaUpdateArgs} args - Arguments to update one Berita.
     * @example
     * // Update one Berita
     * const berita = await prisma.berita.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BeritaUpdateArgs>(args: SelectSubset<T, BeritaUpdateArgs<ExtArgs>>): Prisma__BeritaClient<$Result.GetResult<Prisma.$BeritaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Beritas.
     * @param {BeritaDeleteManyArgs} args - Arguments to filter Beritas to delete.
     * @example
     * // Delete a few Beritas
     * const { count } = await prisma.berita.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BeritaDeleteManyArgs>(args?: SelectSubset<T, BeritaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Beritas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeritaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Beritas
     * const berita = await prisma.berita.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BeritaUpdateManyArgs>(args: SelectSubset<T, BeritaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Beritas and returns the data updated in the database.
     * @param {BeritaUpdateManyAndReturnArgs} args - Arguments to update many Beritas.
     * @example
     * // Update many Beritas
     * const berita = await prisma.berita.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Beritas and only return the `id`
     * const beritaWithIdOnly = await prisma.berita.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BeritaUpdateManyAndReturnArgs>(args: SelectSubset<T, BeritaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeritaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Berita.
     * @param {BeritaUpsertArgs} args - Arguments to update or create a Berita.
     * @example
     * // Update or create a Berita
     * const berita = await prisma.berita.upsert({
     *   create: {
     *     // ... data to create a Berita
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Berita we want to update
     *   }
     * })
     */
    upsert<T extends BeritaUpsertArgs>(args: SelectSubset<T, BeritaUpsertArgs<ExtArgs>>): Prisma__BeritaClient<$Result.GetResult<Prisma.$BeritaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Beritas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeritaCountArgs} args - Arguments to filter Beritas to count.
     * @example
     * // Count the number of Beritas
     * const count = await prisma.berita.count({
     *   where: {
     *     // ... the filter for the Beritas we want to count
     *   }
     * })
    **/
    count<T extends BeritaCountArgs>(
      args?: Subset<T, BeritaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BeritaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Berita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeritaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BeritaAggregateArgs>(args: Subset<T, BeritaAggregateArgs>): Prisma.PrismaPromise<GetBeritaAggregateType<T>>

    /**
     * Group by Berita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeritaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BeritaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BeritaGroupByArgs['orderBy'] }
        : { orderBy?: BeritaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BeritaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBeritaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Berita model
   */
  readonly fields: BeritaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Berita.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BeritaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Berita model
   */
  interface BeritaFieldRefs {
    readonly id: FieldRef<"Berita", 'Int'>
    readonly judul: FieldRef<"Berita", 'String'>
    readonly isi: FieldRef<"Berita", 'String'>
    readonly gambar: FieldRef<"Berita", 'String'>
    readonly tanggal: FieldRef<"Berita", 'DateTime'>
    readonly userId: FieldRef<"Berita", 'Int'>
    readonly createdAt: FieldRef<"Berita", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Berita findUnique
   */
  export type BeritaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeritaInclude<ExtArgs> | null
    /**
     * Filter, which Berita to fetch.
     */
    where: BeritaWhereUniqueInput
  }

  /**
   * Berita findUniqueOrThrow
   */
  export type BeritaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeritaInclude<ExtArgs> | null
    /**
     * Filter, which Berita to fetch.
     */
    where: BeritaWhereUniqueInput
  }

  /**
   * Berita findFirst
   */
  export type BeritaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeritaInclude<ExtArgs> | null
    /**
     * Filter, which Berita to fetch.
     */
    where?: BeritaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beritas to fetch.
     */
    orderBy?: BeritaOrderByWithRelationInput | BeritaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Beritas.
     */
    cursor?: BeritaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beritas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Beritas.
     */
    distinct?: BeritaScalarFieldEnum | BeritaScalarFieldEnum[]
  }

  /**
   * Berita findFirstOrThrow
   */
  export type BeritaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeritaInclude<ExtArgs> | null
    /**
     * Filter, which Berita to fetch.
     */
    where?: BeritaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beritas to fetch.
     */
    orderBy?: BeritaOrderByWithRelationInput | BeritaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Beritas.
     */
    cursor?: BeritaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beritas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Beritas.
     */
    distinct?: BeritaScalarFieldEnum | BeritaScalarFieldEnum[]
  }

  /**
   * Berita findMany
   */
  export type BeritaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeritaInclude<ExtArgs> | null
    /**
     * Filter, which Beritas to fetch.
     */
    where?: BeritaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beritas to fetch.
     */
    orderBy?: BeritaOrderByWithRelationInput | BeritaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Beritas.
     */
    cursor?: BeritaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beritas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Beritas.
     */
    distinct?: BeritaScalarFieldEnum | BeritaScalarFieldEnum[]
  }

  /**
   * Berita create
   */
  export type BeritaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeritaInclude<ExtArgs> | null
    /**
     * The data needed to create a Berita.
     */
    data: XOR<BeritaCreateInput, BeritaUncheckedCreateInput>
  }

  /**
   * Berita createMany
   */
  export type BeritaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Beritas.
     */
    data: BeritaCreateManyInput | BeritaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Berita createManyAndReturn
   */
  export type BeritaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * The data used to create many Beritas.
     */
    data: BeritaCreateManyInput | BeritaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeritaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Berita update
   */
  export type BeritaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeritaInclude<ExtArgs> | null
    /**
     * The data needed to update a Berita.
     */
    data: XOR<BeritaUpdateInput, BeritaUncheckedUpdateInput>
    /**
     * Choose, which Berita to update.
     */
    where: BeritaWhereUniqueInput
  }

  /**
   * Berita updateMany
   */
  export type BeritaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Beritas.
     */
    data: XOR<BeritaUpdateManyMutationInput, BeritaUncheckedUpdateManyInput>
    /**
     * Filter which Beritas to update
     */
    where?: BeritaWhereInput
    /**
     * Limit how many Beritas to update.
     */
    limit?: number
  }

  /**
   * Berita updateManyAndReturn
   */
  export type BeritaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * The data used to update Beritas.
     */
    data: XOR<BeritaUpdateManyMutationInput, BeritaUncheckedUpdateManyInput>
    /**
     * Filter which Beritas to update
     */
    where?: BeritaWhereInput
    /**
     * Limit how many Beritas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeritaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Berita upsert
   */
  export type BeritaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeritaInclude<ExtArgs> | null
    /**
     * The filter to search for the Berita to update in case it exists.
     */
    where: BeritaWhereUniqueInput
    /**
     * In case the Berita found by the `where` argument doesn't exist, create a new Berita with this data.
     */
    create: XOR<BeritaCreateInput, BeritaUncheckedCreateInput>
    /**
     * In case the Berita was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BeritaUpdateInput, BeritaUncheckedUpdateInput>
  }

  /**
   * Berita delete
   */
  export type BeritaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeritaInclude<ExtArgs> | null
    /**
     * Filter which Berita to delete.
     */
    where: BeritaWhereUniqueInput
  }

  /**
   * Berita deleteMany
   */
  export type BeritaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Beritas to delete
     */
    where?: BeritaWhereInput
    /**
     * Limit how many Beritas to delete.
     */
    limit?: number
  }

  /**
   * Berita without action
   */
  export type BeritaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeritaInclude<ExtArgs> | null
  }


  /**
   * Model Layanan
   */

  export type AggregateLayanan = {
    _count: LayananCountAggregateOutputType | null
    _avg: LayananAvgAggregateOutputType | null
    _sum: LayananSumAggregateOutputType | null
    _min: LayananMinAggregateOutputType | null
    _max: LayananMaxAggregateOutputType | null
  }

  export type LayananAvgAggregateOutputType = {
    id: number | null
  }

  export type LayananSumAggregateOutputType = {
    id: number | null
  }

  export type LayananMinAggregateOutputType = {
    id: number | null
    namaLayanan: string | null
    deskripsi: string | null
    createdAt: Date | null
  }

  export type LayananMaxAggregateOutputType = {
    id: number | null
    namaLayanan: string | null
    deskripsi: string | null
    createdAt: Date | null
  }

  export type LayananCountAggregateOutputType = {
    id: number
    namaLayanan: number
    deskripsi: number
    createdAt: number
    _all: number
  }


  export type LayananAvgAggregateInputType = {
    id?: true
  }

  export type LayananSumAggregateInputType = {
    id?: true
  }

  export type LayananMinAggregateInputType = {
    id?: true
    namaLayanan?: true
    deskripsi?: true
    createdAt?: true
  }

  export type LayananMaxAggregateInputType = {
    id?: true
    namaLayanan?: true
    deskripsi?: true
    createdAt?: true
  }

  export type LayananCountAggregateInputType = {
    id?: true
    namaLayanan?: true
    deskripsi?: true
    createdAt?: true
    _all?: true
  }

  export type LayananAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Layanan to aggregate.
     */
    where?: LayananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Layanans to fetch.
     */
    orderBy?: LayananOrderByWithRelationInput | LayananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LayananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Layanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Layanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Layanans
    **/
    _count?: true | LayananCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LayananAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LayananSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LayananMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LayananMaxAggregateInputType
  }

  export type GetLayananAggregateType<T extends LayananAggregateArgs> = {
        [P in keyof T & keyof AggregateLayanan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLayanan[P]>
      : GetScalarType<T[P], AggregateLayanan[P]>
  }




  export type LayananGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LayananWhereInput
    orderBy?: LayananOrderByWithAggregationInput | LayananOrderByWithAggregationInput[]
    by: LayananScalarFieldEnum[] | LayananScalarFieldEnum
    having?: LayananScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LayananCountAggregateInputType | true
    _avg?: LayananAvgAggregateInputType
    _sum?: LayananSumAggregateInputType
    _min?: LayananMinAggregateInputType
    _max?: LayananMaxAggregateInputType
  }

  export type LayananGroupByOutputType = {
    id: number
    namaLayanan: string
    deskripsi: string | null
    createdAt: Date
    _count: LayananCountAggregateOutputType | null
    _avg: LayananAvgAggregateOutputType | null
    _sum: LayananSumAggregateOutputType | null
    _min: LayananMinAggregateOutputType | null
    _max: LayananMaxAggregateOutputType | null
  }

  type GetLayananGroupByPayload<T extends LayananGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LayananGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LayananGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LayananGroupByOutputType[P]>
            : GetScalarType<T[P], LayananGroupByOutputType[P]>
        }
      >
    >


  export type LayananSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaLayanan?: boolean
    deskripsi?: boolean
    createdAt?: boolean
    detail?: boolean | Layanan$detailArgs<ExtArgs>
    _count?: boolean | LayananCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["layanan"]>

  export type LayananSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaLayanan?: boolean
    deskripsi?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["layanan"]>

  export type LayananSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaLayanan?: boolean
    deskripsi?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["layanan"]>

  export type LayananSelectScalar = {
    id?: boolean
    namaLayanan?: boolean
    deskripsi?: boolean
    createdAt?: boolean
  }

  export type LayananOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "namaLayanan" | "deskripsi" | "createdAt", ExtArgs["result"]["layanan"]>
  export type LayananInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detail?: boolean | Layanan$detailArgs<ExtArgs>
    _count?: boolean | LayananCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LayananIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LayananIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LayananPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Layanan"
    objects: {
      detail: Prisma.$LayananDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      namaLayanan: string
      deskripsi: string | null
      createdAt: Date
    }, ExtArgs["result"]["layanan"]>
    composites: {}
  }

  type LayananGetPayload<S extends boolean | null | undefined | LayananDefaultArgs> = $Result.GetResult<Prisma.$LayananPayload, S>

  type LayananCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LayananFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LayananCountAggregateInputType | true
    }

  export interface LayananDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Layanan'], meta: { name: 'Layanan' } }
    /**
     * Find zero or one Layanan that matches the filter.
     * @param {LayananFindUniqueArgs} args - Arguments to find a Layanan
     * @example
     * // Get one Layanan
     * const layanan = await prisma.layanan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LayananFindUniqueArgs>(args: SelectSubset<T, LayananFindUniqueArgs<ExtArgs>>): Prisma__LayananClient<$Result.GetResult<Prisma.$LayananPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Layanan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LayananFindUniqueOrThrowArgs} args - Arguments to find a Layanan
     * @example
     * // Get one Layanan
     * const layanan = await prisma.layanan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LayananFindUniqueOrThrowArgs>(args: SelectSubset<T, LayananFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LayananClient<$Result.GetResult<Prisma.$LayananPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Layanan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayananFindFirstArgs} args - Arguments to find a Layanan
     * @example
     * // Get one Layanan
     * const layanan = await prisma.layanan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LayananFindFirstArgs>(args?: SelectSubset<T, LayananFindFirstArgs<ExtArgs>>): Prisma__LayananClient<$Result.GetResult<Prisma.$LayananPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Layanan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayananFindFirstOrThrowArgs} args - Arguments to find a Layanan
     * @example
     * // Get one Layanan
     * const layanan = await prisma.layanan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LayananFindFirstOrThrowArgs>(args?: SelectSubset<T, LayananFindFirstOrThrowArgs<ExtArgs>>): Prisma__LayananClient<$Result.GetResult<Prisma.$LayananPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Layanans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayananFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Layanans
     * const layanans = await prisma.layanan.findMany()
     * 
     * // Get first 10 Layanans
     * const layanans = await prisma.layanan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const layananWithIdOnly = await prisma.layanan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LayananFindManyArgs>(args?: SelectSubset<T, LayananFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayananPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Layanan.
     * @param {LayananCreateArgs} args - Arguments to create a Layanan.
     * @example
     * // Create one Layanan
     * const Layanan = await prisma.layanan.create({
     *   data: {
     *     // ... data to create a Layanan
     *   }
     * })
     * 
     */
    create<T extends LayananCreateArgs>(args: SelectSubset<T, LayananCreateArgs<ExtArgs>>): Prisma__LayananClient<$Result.GetResult<Prisma.$LayananPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Layanans.
     * @param {LayananCreateManyArgs} args - Arguments to create many Layanans.
     * @example
     * // Create many Layanans
     * const layanan = await prisma.layanan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LayananCreateManyArgs>(args?: SelectSubset<T, LayananCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Layanans and returns the data saved in the database.
     * @param {LayananCreateManyAndReturnArgs} args - Arguments to create many Layanans.
     * @example
     * // Create many Layanans
     * const layanan = await prisma.layanan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Layanans and only return the `id`
     * const layananWithIdOnly = await prisma.layanan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LayananCreateManyAndReturnArgs>(args?: SelectSubset<T, LayananCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayananPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Layanan.
     * @param {LayananDeleteArgs} args - Arguments to delete one Layanan.
     * @example
     * // Delete one Layanan
     * const Layanan = await prisma.layanan.delete({
     *   where: {
     *     // ... filter to delete one Layanan
     *   }
     * })
     * 
     */
    delete<T extends LayananDeleteArgs>(args: SelectSubset<T, LayananDeleteArgs<ExtArgs>>): Prisma__LayananClient<$Result.GetResult<Prisma.$LayananPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Layanan.
     * @param {LayananUpdateArgs} args - Arguments to update one Layanan.
     * @example
     * // Update one Layanan
     * const layanan = await prisma.layanan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LayananUpdateArgs>(args: SelectSubset<T, LayananUpdateArgs<ExtArgs>>): Prisma__LayananClient<$Result.GetResult<Prisma.$LayananPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Layanans.
     * @param {LayananDeleteManyArgs} args - Arguments to filter Layanans to delete.
     * @example
     * // Delete a few Layanans
     * const { count } = await prisma.layanan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LayananDeleteManyArgs>(args?: SelectSubset<T, LayananDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Layanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayananUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Layanans
     * const layanan = await prisma.layanan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LayananUpdateManyArgs>(args: SelectSubset<T, LayananUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Layanans and returns the data updated in the database.
     * @param {LayananUpdateManyAndReturnArgs} args - Arguments to update many Layanans.
     * @example
     * // Update many Layanans
     * const layanan = await prisma.layanan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Layanans and only return the `id`
     * const layananWithIdOnly = await prisma.layanan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LayananUpdateManyAndReturnArgs>(args: SelectSubset<T, LayananUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayananPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Layanan.
     * @param {LayananUpsertArgs} args - Arguments to update or create a Layanan.
     * @example
     * // Update or create a Layanan
     * const layanan = await prisma.layanan.upsert({
     *   create: {
     *     // ... data to create a Layanan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Layanan we want to update
     *   }
     * })
     */
    upsert<T extends LayananUpsertArgs>(args: SelectSubset<T, LayananUpsertArgs<ExtArgs>>): Prisma__LayananClient<$Result.GetResult<Prisma.$LayananPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Layanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayananCountArgs} args - Arguments to filter Layanans to count.
     * @example
     * // Count the number of Layanans
     * const count = await prisma.layanan.count({
     *   where: {
     *     // ... the filter for the Layanans we want to count
     *   }
     * })
    **/
    count<T extends LayananCountArgs>(
      args?: Subset<T, LayananCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LayananCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Layanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayananAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LayananAggregateArgs>(args: Subset<T, LayananAggregateArgs>): Prisma.PrismaPromise<GetLayananAggregateType<T>>

    /**
     * Group by Layanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayananGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LayananGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LayananGroupByArgs['orderBy'] }
        : { orderBy?: LayananGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LayananGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLayananGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Layanan model
   */
  readonly fields: LayananFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Layanan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LayananClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detail<T extends Layanan$detailArgs<ExtArgs> = {}>(args?: Subset<T, Layanan$detailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayananDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Layanan model
   */
  interface LayananFieldRefs {
    readonly id: FieldRef<"Layanan", 'Int'>
    readonly namaLayanan: FieldRef<"Layanan", 'String'>
    readonly deskripsi: FieldRef<"Layanan", 'String'>
    readonly createdAt: FieldRef<"Layanan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Layanan findUnique
   */
  export type LayananFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layanan
     */
    select?: LayananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layanan
     */
    omit?: LayananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananInclude<ExtArgs> | null
    /**
     * Filter, which Layanan to fetch.
     */
    where: LayananWhereUniqueInput
  }

  /**
   * Layanan findUniqueOrThrow
   */
  export type LayananFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layanan
     */
    select?: LayananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layanan
     */
    omit?: LayananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananInclude<ExtArgs> | null
    /**
     * Filter, which Layanan to fetch.
     */
    where: LayananWhereUniqueInput
  }

  /**
   * Layanan findFirst
   */
  export type LayananFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layanan
     */
    select?: LayananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layanan
     */
    omit?: LayananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananInclude<ExtArgs> | null
    /**
     * Filter, which Layanan to fetch.
     */
    where?: LayananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Layanans to fetch.
     */
    orderBy?: LayananOrderByWithRelationInput | LayananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Layanans.
     */
    cursor?: LayananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Layanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Layanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Layanans.
     */
    distinct?: LayananScalarFieldEnum | LayananScalarFieldEnum[]
  }

  /**
   * Layanan findFirstOrThrow
   */
  export type LayananFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layanan
     */
    select?: LayananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layanan
     */
    omit?: LayananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananInclude<ExtArgs> | null
    /**
     * Filter, which Layanan to fetch.
     */
    where?: LayananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Layanans to fetch.
     */
    orderBy?: LayananOrderByWithRelationInput | LayananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Layanans.
     */
    cursor?: LayananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Layanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Layanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Layanans.
     */
    distinct?: LayananScalarFieldEnum | LayananScalarFieldEnum[]
  }

  /**
   * Layanan findMany
   */
  export type LayananFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layanan
     */
    select?: LayananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layanan
     */
    omit?: LayananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananInclude<ExtArgs> | null
    /**
     * Filter, which Layanans to fetch.
     */
    where?: LayananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Layanans to fetch.
     */
    orderBy?: LayananOrderByWithRelationInput | LayananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Layanans.
     */
    cursor?: LayananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Layanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Layanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Layanans.
     */
    distinct?: LayananScalarFieldEnum | LayananScalarFieldEnum[]
  }

  /**
   * Layanan create
   */
  export type LayananCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layanan
     */
    select?: LayananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layanan
     */
    omit?: LayananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananInclude<ExtArgs> | null
    /**
     * The data needed to create a Layanan.
     */
    data: XOR<LayananCreateInput, LayananUncheckedCreateInput>
  }

  /**
   * Layanan createMany
   */
  export type LayananCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Layanans.
     */
    data: LayananCreateManyInput | LayananCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Layanan createManyAndReturn
   */
  export type LayananCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layanan
     */
    select?: LayananSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Layanan
     */
    omit?: LayananOmit<ExtArgs> | null
    /**
     * The data used to create many Layanans.
     */
    data: LayananCreateManyInput | LayananCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Layanan update
   */
  export type LayananUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layanan
     */
    select?: LayananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layanan
     */
    omit?: LayananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananInclude<ExtArgs> | null
    /**
     * The data needed to update a Layanan.
     */
    data: XOR<LayananUpdateInput, LayananUncheckedUpdateInput>
    /**
     * Choose, which Layanan to update.
     */
    where: LayananWhereUniqueInput
  }

  /**
   * Layanan updateMany
   */
  export type LayananUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Layanans.
     */
    data: XOR<LayananUpdateManyMutationInput, LayananUncheckedUpdateManyInput>
    /**
     * Filter which Layanans to update
     */
    where?: LayananWhereInput
    /**
     * Limit how many Layanans to update.
     */
    limit?: number
  }

  /**
   * Layanan updateManyAndReturn
   */
  export type LayananUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layanan
     */
    select?: LayananSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Layanan
     */
    omit?: LayananOmit<ExtArgs> | null
    /**
     * The data used to update Layanans.
     */
    data: XOR<LayananUpdateManyMutationInput, LayananUncheckedUpdateManyInput>
    /**
     * Filter which Layanans to update
     */
    where?: LayananWhereInput
    /**
     * Limit how many Layanans to update.
     */
    limit?: number
  }

  /**
   * Layanan upsert
   */
  export type LayananUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layanan
     */
    select?: LayananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layanan
     */
    omit?: LayananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananInclude<ExtArgs> | null
    /**
     * The filter to search for the Layanan to update in case it exists.
     */
    where: LayananWhereUniqueInput
    /**
     * In case the Layanan found by the `where` argument doesn't exist, create a new Layanan with this data.
     */
    create: XOR<LayananCreateInput, LayananUncheckedCreateInput>
    /**
     * In case the Layanan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LayananUpdateInput, LayananUncheckedUpdateInput>
  }

  /**
   * Layanan delete
   */
  export type LayananDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layanan
     */
    select?: LayananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layanan
     */
    omit?: LayananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananInclude<ExtArgs> | null
    /**
     * Filter which Layanan to delete.
     */
    where: LayananWhereUniqueInput
  }

  /**
   * Layanan deleteMany
   */
  export type LayananDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Layanans to delete
     */
    where?: LayananWhereInput
    /**
     * Limit how many Layanans to delete.
     */
    limit?: number
  }

  /**
   * Layanan.detail
   */
  export type Layanan$detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayananDetail
     */
    select?: LayananDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayananDetail
     */
    omit?: LayananDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananDetailInclude<ExtArgs> | null
    where?: LayananDetailWhereInput
    orderBy?: LayananDetailOrderByWithRelationInput | LayananDetailOrderByWithRelationInput[]
    cursor?: LayananDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LayananDetailScalarFieldEnum | LayananDetailScalarFieldEnum[]
  }

  /**
   * Layanan without action
   */
  export type LayananDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layanan
     */
    select?: LayananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layanan
     */
    omit?: LayananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananInclude<ExtArgs> | null
  }


  /**
   * Model LayananDetail
   */

  export type AggregateLayananDetail = {
    _count: LayananDetailCountAggregateOutputType | null
    _avg: LayananDetailAvgAggregateOutputType | null
    _sum: LayananDetailSumAggregateOutputType | null
    _min: LayananDetailMinAggregateOutputType | null
    _max: LayananDetailMaxAggregateOutputType | null
  }

  export type LayananDetailAvgAggregateOutputType = {
    id: number | null
    layananId: number | null
    harga: Decimal | null
  }

  export type LayananDetailSumAggregateOutputType = {
    id: number | null
    layananId: number | null
    harga: Decimal | null
  }

  export type LayananDetailMinAggregateOutputType = {
    id: number | null
    layananId: number | null
    namaPaket: string | null
    harga: Decimal | null
    deskripsi: string | null
    createdAt: Date | null
  }

  export type LayananDetailMaxAggregateOutputType = {
    id: number | null
    layananId: number | null
    namaPaket: string | null
    harga: Decimal | null
    deskripsi: string | null
    createdAt: Date | null
  }

  export type LayananDetailCountAggregateOutputType = {
    id: number
    layananId: number
    namaPaket: number
    harga: number
    deskripsi: number
    createdAt: number
    _all: number
  }


  export type LayananDetailAvgAggregateInputType = {
    id?: true
    layananId?: true
    harga?: true
  }

  export type LayananDetailSumAggregateInputType = {
    id?: true
    layananId?: true
    harga?: true
  }

  export type LayananDetailMinAggregateInputType = {
    id?: true
    layananId?: true
    namaPaket?: true
    harga?: true
    deskripsi?: true
    createdAt?: true
  }

  export type LayananDetailMaxAggregateInputType = {
    id?: true
    layananId?: true
    namaPaket?: true
    harga?: true
    deskripsi?: true
    createdAt?: true
  }

  export type LayananDetailCountAggregateInputType = {
    id?: true
    layananId?: true
    namaPaket?: true
    harga?: true
    deskripsi?: true
    createdAt?: true
    _all?: true
  }

  export type LayananDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LayananDetail to aggregate.
     */
    where?: LayananDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayananDetails to fetch.
     */
    orderBy?: LayananDetailOrderByWithRelationInput | LayananDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LayananDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayananDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayananDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LayananDetails
    **/
    _count?: true | LayananDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LayananDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LayananDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LayananDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LayananDetailMaxAggregateInputType
  }

  export type GetLayananDetailAggregateType<T extends LayananDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateLayananDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLayananDetail[P]>
      : GetScalarType<T[P], AggregateLayananDetail[P]>
  }




  export type LayananDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LayananDetailWhereInput
    orderBy?: LayananDetailOrderByWithAggregationInput | LayananDetailOrderByWithAggregationInput[]
    by: LayananDetailScalarFieldEnum[] | LayananDetailScalarFieldEnum
    having?: LayananDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LayananDetailCountAggregateInputType | true
    _avg?: LayananDetailAvgAggregateInputType
    _sum?: LayananDetailSumAggregateInputType
    _min?: LayananDetailMinAggregateInputType
    _max?: LayananDetailMaxAggregateInputType
  }

  export type LayananDetailGroupByOutputType = {
    id: number
    layananId: number
    namaPaket: string
    harga: Decimal
    deskripsi: string | null
    createdAt: Date
    _count: LayananDetailCountAggregateOutputType | null
    _avg: LayananDetailAvgAggregateOutputType | null
    _sum: LayananDetailSumAggregateOutputType | null
    _min: LayananDetailMinAggregateOutputType | null
    _max: LayananDetailMaxAggregateOutputType | null
  }

  type GetLayananDetailGroupByPayload<T extends LayananDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LayananDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LayananDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LayananDetailGroupByOutputType[P]>
            : GetScalarType<T[P], LayananDetailGroupByOutputType[P]>
        }
      >
    >


  export type LayananDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    layananId?: boolean
    namaPaket?: boolean
    harga?: boolean
    deskripsi?: boolean
    createdAt?: boolean
    layanan?: boolean | LayananDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["layananDetail"]>

  export type LayananDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    layananId?: boolean
    namaPaket?: boolean
    harga?: boolean
    deskripsi?: boolean
    createdAt?: boolean
    layanan?: boolean | LayananDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["layananDetail"]>

  export type LayananDetailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    layananId?: boolean
    namaPaket?: boolean
    harga?: boolean
    deskripsi?: boolean
    createdAt?: boolean
    layanan?: boolean | LayananDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["layananDetail"]>

  export type LayananDetailSelectScalar = {
    id?: boolean
    layananId?: boolean
    namaPaket?: boolean
    harga?: boolean
    deskripsi?: boolean
    createdAt?: boolean
  }

  export type LayananDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "layananId" | "namaPaket" | "harga" | "deskripsi" | "createdAt", ExtArgs["result"]["layananDetail"]>
  export type LayananDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    layanan?: boolean | LayananDefaultArgs<ExtArgs>
  }
  export type LayananDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    layanan?: boolean | LayananDefaultArgs<ExtArgs>
  }
  export type LayananDetailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    layanan?: boolean | LayananDefaultArgs<ExtArgs>
  }

  export type $LayananDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LayananDetail"
    objects: {
      layanan: Prisma.$LayananPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      layananId: number
      namaPaket: string
      harga: Prisma.Decimal
      deskripsi: string | null
      createdAt: Date
    }, ExtArgs["result"]["layananDetail"]>
    composites: {}
  }

  type LayananDetailGetPayload<S extends boolean | null | undefined | LayananDetailDefaultArgs> = $Result.GetResult<Prisma.$LayananDetailPayload, S>

  type LayananDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LayananDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LayananDetailCountAggregateInputType | true
    }

  export interface LayananDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LayananDetail'], meta: { name: 'LayananDetail' } }
    /**
     * Find zero or one LayananDetail that matches the filter.
     * @param {LayananDetailFindUniqueArgs} args - Arguments to find a LayananDetail
     * @example
     * // Get one LayananDetail
     * const layananDetail = await prisma.layananDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LayananDetailFindUniqueArgs>(args: SelectSubset<T, LayananDetailFindUniqueArgs<ExtArgs>>): Prisma__LayananDetailClient<$Result.GetResult<Prisma.$LayananDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LayananDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LayananDetailFindUniqueOrThrowArgs} args - Arguments to find a LayananDetail
     * @example
     * // Get one LayananDetail
     * const layananDetail = await prisma.layananDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LayananDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, LayananDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LayananDetailClient<$Result.GetResult<Prisma.$LayananDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LayananDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayananDetailFindFirstArgs} args - Arguments to find a LayananDetail
     * @example
     * // Get one LayananDetail
     * const layananDetail = await prisma.layananDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LayananDetailFindFirstArgs>(args?: SelectSubset<T, LayananDetailFindFirstArgs<ExtArgs>>): Prisma__LayananDetailClient<$Result.GetResult<Prisma.$LayananDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LayananDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayananDetailFindFirstOrThrowArgs} args - Arguments to find a LayananDetail
     * @example
     * // Get one LayananDetail
     * const layananDetail = await prisma.layananDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LayananDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, LayananDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__LayananDetailClient<$Result.GetResult<Prisma.$LayananDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LayananDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayananDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LayananDetails
     * const layananDetails = await prisma.layananDetail.findMany()
     * 
     * // Get first 10 LayananDetails
     * const layananDetails = await prisma.layananDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const layananDetailWithIdOnly = await prisma.layananDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LayananDetailFindManyArgs>(args?: SelectSubset<T, LayananDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayananDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LayananDetail.
     * @param {LayananDetailCreateArgs} args - Arguments to create a LayananDetail.
     * @example
     * // Create one LayananDetail
     * const LayananDetail = await prisma.layananDetail.create({
     *   data: {
     *     // ... data to create a LayananDetail
     *   }
     * })
     * 
     */
    create<T extends LayananDetailCreateArgs>(args: SelectSubset<T, LayananDetailCreateArgs<ExtArgs>>): Prisma__LayananDetailClient<$Result.GetResult<Prisma.$LayananDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LayananDetails.
     * @param {LayananDetailCreateManyArgs} args - Arguments to create many LayananDetails.
     * @example
     * // Create many LayananDetails
     * const layananDetail = await prisma.layananDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LayananDetailCreateManyArgs>(args?: SelectSubset<T, LayananDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LayananDetails and returns the data saved in the database.
     * @param {LayananDetailCreateManyAndReturnArgs} args - Arguments to create many LayananDetails.
     * @example
     * // Create many LayananDetails
     * const layananDetail = await prisma.layananDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LayananDetails and only return the `id`
     * const layananDetailWithIdOnly = await prisma.layananDetail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LayananDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, LayananDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayananDetailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LayananDetail.
     * @param {LayananDetailDeleteArgs} args - Arguments to delete one LayananDetail.
     * @example
     * // Delete one LayananDetail
     * const LayananDetail = await prisma.layananDetail.delete({
     *   where: {
     *     // ... filter to delete one LayananDetail
     *   }
     * })
     * 
     */
    delete<T extends LayananDetailDeleteArgs>(args: SelectSubset<T, LayananDetailDeleteArgs<ExtArgs>>): Prisma__LayananDetailClient<$Result.GetResult<Prisma.$LayananDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LayananDetail.
     * @param {LayananDetailUpdateArgs} args - Arguments to update one LayananDetail.
     * @example
     * // Update one LayananDetail
     * const layananDetail = await prisma.layananDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LayananDetailUpdateArgs>(args: SelectSubset<T, LayananDetailUpdateArgs<ExtArgs>>): Prisma__LayananDetailClient<$Result.GetResult<Prisma.$LayananDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LayananDetails.
     * @param {LayananDetailDeleteManyArgs} args - Arguments to filter LayananDetails to delete.
     * @example
     * // Delete a few LayananDetails
     * const { count } = await prisma.layananDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LayananDetailDeleteManyArgs>(args?: SelectSubset<T, LayananDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LayananDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayananDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LayananDetails
     * const layananDetail = await prisma.layananDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LayananDetailUpdateManyArgs>(args: SelectSubset<T, LayananDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LayananDetails and returns the data updated in the database.
     * @param {LayananDetailUpdateManyAndReturnArgs} args - Arguments to update many LayananDetails.
     * @example
     * // Update many LayananDetails
     * const layananDetail = await prisma.layananDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LayananDetails and only return the `id`
     * const layananDetailWithIdOnly = await prisma.layananDetail.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LayananDetailUpdateManyAndReturnArgs>(args: SelectSubset<T, LayananDetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayananDetailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LayananDetail.
     * @param {LayananDetailUpsertArgs} args - Arguments to update or create a LayananDetail.
     * @example
     * // Update or create a LayananDetail
     * const layananDetail = await prisma.layananDetail.upsert({
     *   create: {
     *     // ... data to create a LayananDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LayananDetail we want to update
     *   }
     * })
     */
    upsert<T extends LayananDetailUpsertArgs>(args: SelectSubset<T, LayananDetailUpsertArgs<ExtArgs>>): Prisma__LayananDetailClient<$Result.GetResult<Prisma.$LayananDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LayananDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayananDetailCountArgs} args - Arguments to filter LayananDetails to count.
     * @example
     * // Count the number of LayananDetails
     * const count = await prisma.layananDetail.count({
     *   where: {
     *     // ... the filter for the LayananDetails we want to count
     *   }
     * })
    **/
    count<T extends LayananDetailCountArgs>(
      args?: Subset<T, LayananDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LayananDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LayananDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayananDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LayananDetailAggregateArgs>(args: Subset<T, LayananDetailAggregateArgs>): Prisma.PrismaPromise<GetLayananDetailAggregateType<T>>

    /**
     * Group by LayananDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayananDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LayananDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LayananDetailGroupByArgs['orderBy'] }
        : { orderBy?: LayananDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LayananDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLayananDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LayananDetail model
   */
  readonly fields: LayananDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LayananDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LayananDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    layanan<T extends LayananDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LayananDefaultArgs<ExtArgs>>): Prisma__LayananClient<$Result.GetResult<Prisma.$LayananPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LayananDetail model
   */
  interface LayananDetailFieldRefs {
    readonly id: FieldRef<"LayananDetail", 'Int'>
    readonly layananId: FieldRef<"LayananDetail", 'Int'>
    readonly namaPaket: FieldRef<"LayananDetail", 'String'>
    readonly harga: FieldRef<"LayananDetail", 'Decimal'>
    readonly deskripsi: FieldRef<"LayananDetail", 'String'>
    readonly createdAt: FieldRef<"LayananDetail", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LayananDetail findUnique
   */
  export type LayananDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayananDetail
     */
    select?: LayananDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayananDetail
     */
    omit?: LayananDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananDetailInclude<ExtArgs> | null
    /**
     * Filter, which LayananDetail to fetch.
     */
    where: LayananDetailWhereUniqueInput
  }

  /**
   * LayananDetail findUniqueOrThrow
   */
  export type LayananDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayananDetail
     */
    select?: LayananDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayananDetail
     */
    omit?: LayananDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananDetailInclude<ExtArgs> | null
    /**
     * Filter, which LayananDetail to fetch.
     */
    where: LayananDetailWhereUniqueInput
  }

  /**
   * LayananDetail findFirst
   */
  export type LayananDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayananDetail
     */
    select?: LayananDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayananDetail
     */
    omit?: LayananDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananDetailInclude<ExtArgs> | null
    /**
     * Filter, which LayananDetail to fetch.
     */
    where?: LayananDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayananDetails to fetch.
     */
    orderBy?: LayananDetailOrderByWithRelationInput | LayananDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LayananDetails.
     */
    cursor?: LayananDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayananDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayananDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LayananDetails.
     */
    distinct?: LayananDetailScalarFieldEnum | LayananDetailScalarFieldEnum[]
  }

  /**
   * LayananDetail findFirstOrThrow
   */
  export type LayananDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayananDetail
     */
    select?: LayananDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayananDetail
     */
    omit?: LayananDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananDetailInclude<ExtArgs> | null
    /**
     * Filter, which LayananDetail to fetch.
     */
    where?: LayananDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayananDetails to fetch.
     */
    orderBy?: LayananDetailOrderByWithRelationInput | LayananDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LayananDetails.
     */
    cursor?: LayananDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayananDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayananDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LayananDetails.
     */
    distinct?: LayananDetailScalarFieldEnum | LayananDetailScalarFieldEnum[]
  }

  /**
   * LayananDetail findMany
   */
  export type LayananDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayananDetail
     */
    select?: LayananDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayananDetail
     */
    omit?: LayananDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananDetailInclude<ExtArgs> | null
    /**
     * Filter, which LayananDetails to fetch.
     */
    where?: LayananDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayananDetails to fetch.
     */
    orderBy?: LayananDetailOrderByWithRelationInput | LayananDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LayananDetails.
     */
    cursor?: LayananDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayananDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayananDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LayananDetails.
     */
    distinct?: LayananDetailScalarFieldEnum | LayananDetailScalarFieldEnum[]
  }

  /**
   * LayananDetail create
   */
  export type LayananDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayananDetail
     */
    select?: LayananDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayananDetail
     */
    omit?: LayananDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a LayananDetail.
     */
    data: XOR<LayananDetailCreateInput, LayananDetailUncheckedCreateInput>
  }

  /**
   * LayananDetail createMany
   */
  export type LayananDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LayananDetails.
     */
    data: LayananDetailCreateManyInput | LayananDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LayananDetail createManyAndReturn
   */
  export type LayananDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayananDetail
     */
    select?: LayananDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LayananDetail
     */
    omit?: LayananDetailOmit<ExtArgs> | null
    /**
     * The data used to create many LayananDetails.
     */
    data: LayananDetailCreateManyInput | LayananDetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LayananDetail update
   */
  export type LayananDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayananDetail
     */
    select?: LayananDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayananDetail
     */
    omit?: LayananDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a LayananDetail.
     */
    data: XOR<LayananDetailUpdateInput, LayananDetailUncheckedUpdateInput>
    /**
     * Choose, which LayananDetail to update.
     */
    where: LayananDetailWhereUniqueInput
  }

  /**
   * LayananDetail updateMany
   */
  export type LayananDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LayananDetails.
     */
    data: XOR<LayananDetailUpdateManyMutationInput, LayananDetailUncheckedUpdateManyInput>
    /**
     * Filter which LayananDetails to update
     */
    where?: LayananDetailWhereInput
    /**
     * Limit how many LayananDetails to update.
     */
    limit?: number
  }

  /**
   * LayananDetail updateManyAndReturn
   */
  export type LayananDetailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayananDetail
     */
    select?: LayananDetailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LayananDetail
     */
    omit?: LayananDetailOmit<ExtArgs> | null
    /**
     * The data used to update LayananDetails.
     */
    data: XOR<LayananDetailUpdateManyMutationInput, LayananDetailUncheckedUpdateManyInput>
    /**
     * Filter which LayananDetails to update
     */
    where?: LayananDetailWhereInput
    /**
     * Limit how many LayananDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananDetailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LayananDetail upsert
   */
  export type LayananDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayananDetail
     */
    select?: LayananDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayananDetail
     */
    omit?: LayananDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the LayananDetail to update in case it exists.
     */
    where: LayananDetailWhereUniqueInput
    /**
     * In case the LayananDetail found by the `where` argument doesn't exist, create a new LayananDetail with this data.
     */
    create: XOR<LayananDetailCreateInput, LayananDetailUncheckedCreateInput>
    /**
     * In case the LayananDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LayananDetailUpdateInput, LayananDetailUncheckedUpdateInput>
  }

  /**
   * LayananDetail delete
   */
  export type LayananDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayananDetail
     */
    select?: LayananDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayananDetail
     */
    omit?: LayananDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananDetailInclude<ExtArgs> | null
    /**
     * Filter which LayananDetail to delete.
     */
    where: LayananDetailWhereUniqueInput
  }

  /**
   * LayananDetail deleteMany
   */
  export type LayananDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LayananDetails to delete
     */
    where?: LayananDetailWhereInput
    /**
     * Limit how many LayananDetails to delete.
     */
    limit?: number
  }

  /**
   * LayananDetail without action
   */
  export type LayananDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayananDetail
     */
    select?: LayananDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayananDetail
     */
    omit?: LayananDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananDetailInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PoliScalarFieldEnum: {
    id: 'id',
    namaPoli: 'namaPoli',
    createdAt: 'createdAt'
  };

  export type PoliScalarFieldEnum = (typeof PoliScalarFieldEnum)[keyof typeof PoliScalarFieldEnum]


  export const DokterScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    spesialis: 'spesialis',
    foto: 'foto',
    poliId: 'poliId',
    createdAt: 'createdAt'
  };

  export type DokterScalarFieldEnum = (typeof DokterScalarFieldEnum)[keyof typeof DokterScalarFieldEnum]


  export const JadwalDokterScalarFieldEnum: {
    id: 'id',
    dokterId: 'dokterId',
    hari: 'hari',
    jamMulai: 'jamMulai',
    jamSelesai: 'jamSelesai',
    createdAt: 'createdAt'
  };

  export type JadwalDokterScalarFieldEnum = (typeof JadwalDokterScalarFieldEnum)[keyof typeof JadwalDokterScalarFieldEnum]


  export const BeritaScalarFieldEnum: {
    id: 'id',
    judul: 'judul',
    isi: 'isi',
    gambar: 'gambar',
    tanggal: 'tanggal',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type BeritaScalarFieldEnum = (typeof BeritaScalarFieldEnum)[keyof typeof BeritaScalarFieldEnum]


  export const LayananScalarFieldEnum: {
    id: 'id',
    namaLayanan: 'namaLayanan',
    deskripsi: 'deskripsi',
    createdAt: 'createdAt'
  };

  export type LayananScalarFieldEnum = (typeof LayananScalarFieldEnum)[keyof typeof LayananScalarFieldEnum]


  export const LayananDetailScalarFieldEnum: {
    id: 'id',
    layananId: 'layananId',
    namaPaket: 'namaPaket',
    harga: 'harga',
    deskripsi: 'deskripsi',
    createdAt: 'createdAt'
  };

  export type LayananDetailScalarFieldEnum = (typeof LayananDetailScalarFieldEnum)[keyof typeof LayananDetailScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Hari'
   */
  export type EnumHariFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Hari'>
    


  /**
   * Reference to a field of type 'Hari[]'
   */
  export type ListEnumHariFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Hari[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    berita?: BeritaListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    berita?: BeritaOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    berita?: BeritaListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PoliWhereInput = {
    AND?: PoliWhereInput | PoliWhereInput[]
    OR?: PoliWhereInput[]
    NOT?: PoliWhereInput | PoliWhereInput[]
    id?: IntFilter<"Poli"> | number
    namaPoli?: StringFilter<"Poli"> | string
    createdAt?: DateTimeFilter<"Poli"> | Date | string
    dokter?: DokterListRelationFilter
  }

  export type PoliOrderByWithRelationInput = {
    id?: SortOrder
    namaPoli?: SortOrder
    createdAt?: SortOrder
    dokter?: DokterOrderByRelationAggregateInput
  }

  export type PoliWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PoliWhereInput | PoliWhereInput[]
    OR?: PoliWhereInput[]
    NOT?: PoliWhereInput | PoliWhereInput[]
    namaPoli?: StringFilter<"Poli"> | string
    createdAt?: DateTimeFilter<"Poli"> | Date | string
    dokter?: DokterListRelationFilter
  }, "id">

  export type PoliOrderByWithAggregationInput = {
    id?: SortOrder
    namaPoli?: SortOrder
    createdAt?: SortOrder
    _count?: PoliCountOrderByAggregateInput
    _avg?: PoliAvgOrderByAggregateInput
    _max?: PoliMaxOrderByAggregateInput
    _min?: PoliMinOrderByAggregateInput
    _sum?: PoliSumOrderByAggregateInput
  }

  export type PoliScalarWhereWithAggregatesInput = {
    AND?: PoliScalarWhereWithAggregatesInput | PoliScalarWhereWithAggregatesInput[]
    OR?: PoliScalarWhereWithAggregatesInput[]
    NOT?: PoliScalarWhereWithAggregatesInput | PoliScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Poli"> | number
    namaPoli?: StringWithAggregatesFilter<"Poli"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Poli"> | Date | string
  }

  export type DokterWhereInput = {
    AND?: DokterWhereInput | DokterWhereInput[]
    OR?: DokterWhereInput[]
    NOT?: DokterWhereInput | DokterWhereInput[]
    id?: IntFilter<"Dokter"> | number
    nama?: StringFilter<"Dokter"> | string
    spesialis?: StringFilter<"Dokter"> | string
    foto?: StringNullableFilter<"Dokter"> | string | null
    poliId?: IntFilter<"Dokter"> | number
    createdAt?: DateTimeFilter<"Dokter"> | Date | string
    poli?: XOR<PoliScalarRelationFilter, PoliWhereInput>
    jadwal?: JadwalDokterListRelationFilter
  }

  export type DokterOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    spesialis?: SortOrder
    foto?: SortOrderInput | SortOrder
    poliId?: SortOrder
    createdAt?: SortOrder
    poli?: PoliOrderByWithRelationInput
    jadwal?: JadwalDokterOrderByRelationAggregateInput
  }

  export type DokterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DokterWhereInput | DokterWhereInput[]
    OR?: DokterWhereInput[]
    NOT?: DokterWhereInput | DokterWhereInput[]
    nama?: StringFilter<"Dokter"> | string
    spesialis?: StringFilter<"Dokter"> | string
    foto?: StringNullableFilter<"Dokter"> | string | null
    poliId?: IntFilter<"Dokter"> | number
    createdAt?: DateTimeFilter<"Dokter"> | Date | string
    poli?: XOR<PoliScalarRelationFilter, PoliWhereInput>
    jadwal?: JadwalDokterListRelationFilter
  }, "id">

  export type DokterOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    spesialis?: SortOrder
    foto?: SortOrderInput | SortOrder
    poliId?: SortOrder
    createdAt?: SortOrder
    _count?: DokterCountOrderByAggregateInput
    _avg?: DokterAvgOrderByAggregateInput
    _max?: DokterMaxOrderByAggregateInput
    _min?: DokterMinOrderByAggregateInput
    _sum?: DokterSumOrderByAggregateInput
  }

  export type DokterScalarWhereWithAggregatesInput = {
    AND?: DokterScalarWhereWithAggregatesInput | DokterScalarWhereWithAggregatesInput[]
    OR?: DokterScalarWhereWithAggregatesInput[]
    NOT?: DokterScalarWhereWithAggregatesInput | DokterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dokter"> | number
    nama?: StringWithAggregatesFilter<"Dokter"> | string
    spesialis?: StringWithAggregatesFilter<"Dokter"> | string
    foto?: StringNullableWithAggregatesFilter<"Dokter"> | string | null
    poliId?: IntWithAggregatesFilter<"Dokter"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Dokter"> | Date | string
  }

  export type JadwalDokterWhereInput = {
    AND?: JadwalDokterWhereInput | JadwalDokterWhereInput[]
    OR?: JadwalDokterWhereInput[]
    NOT?: JadwalDokterWhereInput | JadwalDokterWhereInput[]
    id?: IntFilter<"JadwalDokter"> | number
    dokterId?: IntFilter<"JadwalDokter"> | number
    hari?: EnumHariFilter<"JadwalDokter"> | $Enums.Hari
    jamMulai?: StringFilter<"JadwalDokter"> | string
    jamSelesai?: StringFilter<"JadwalDokter"> | string
    createdAt?: DateTimeFilter<"JadwalDokter"> | Date | string
    dokter?: XOR<DokterScalarRelationFilter, DokterWhereInput>
  }

  export type JadwalDokterOrderByWithRelationInput = {
    id?: SortOrder
    dokterId?: SortOrder
    hari?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    createdAt?: SortOrder
    dokter?: DokterOrderByWithRelationInput
  }

  export type JadwalDokterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JadwalDokterWhereInput | JadwalDokterWhereInput[]
    OR?: JadwalDokterWhereInput[]
    NOT?: JadwalDokterWhereInput | JadwalDokterWhereInput[]
    dokterId?: IntFilter<"JadwalDokter"> | number
    hari?: EnumHariFilter<"JadwalDokter"> | $Enums.Hari
    jamMulai?: StringFilter<"JadwalDokter"> | string
    jamSelesai?: StringFilter<"JadwalDokter"> | string
    createdAt?: DateTimeFilter<"JadwalDokter"> | Date | string
    dokter?: XOR<DokterScalarRelationFilter, DokterWhereInput>
  }, "id">

  export type JadwalDokterOrderByWithAggregationInput = {
    id?: SortOrder
    dokterId?: SortOrder
    hari?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    createdAt?: SortOrder
    _count?: JadwalDokterCountOrderByAggregateInput
    _avg?: JadwalDokterAvgOrderByAggregateInput
    _max?: JadwalDokterMaxOrderByAggregateInput
    _min?: JadwalDokterMinOrderByAggregateInput
    _sum?: JadwalDokterSumOrderByAggregateInput
  }

  export type JadwalDokterScalarWhereWithAggregatesInput = {
    AND?: JadwalDokterScalarWhereWithAggregatesInput | JadwalDokterScalarWhereWithAggregatesInput[]
    OR?: JadwalDokterScalarWhereWithAggregatesInput[]
    NOT?: JadwalDokterScalarWhereWithAggregatesInput | JadwalDokterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JadwalDokter"> | number
    dokterId?: IntWithAggregatesFilter<"JadwalDokter"> | number
    hari?: EnumHariWithAggregatesFilter<"JadwalDokter"> | $Enums.Hari
    jamMulai?: StringWithAggregatesFilter<"JadwalDokter"> | string
    jamSelesai?: StringWithAggregatesFilter<"JadwalDokter"> | string
    createdAt?: DateTimeWithAggregatesFilter<"JadwalDokter"> | Date | string
  }

  export type BeritaWhereInput = {
    AND?: BeritaWhereInput | BeritaWhereInput[]
    OR?: BeritaWhereInput[]
    NOT?: BeritaWhereInput | BeritaWhereInput[]
    id?: IntFilter<"Berita"> | number
    judul?: StringFilter<"Berita"> | string
    isi?: StringFilter<"Berita"> | string
    gambar?: StringNullableFilter<"Berita"> | string | null
    tanggal?: DateTimeFilter<"Berita"> | Date | string
    userId?: IntFilter<"Berita"> | number
    createdAt?: DateTimeFilter<"Berita"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BeritaOrderByWithRelationInput = {
    id?: SortOrder
    judul?: SortOrder
    isi?: SortOrder
    gambar?: SortOrderInput | SortOrder
    tanggal?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BeritaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BeritaWhereInput | BeritaWhereInput[]
    OR?: BeritaWhereInput[]
    NOT?: BeritaWhereInput | BeritaWhereInput[]
    judul?: StringFilter<"Berita"> | string
    isi?: StringFilter<"Berita"> | string
    gambar?: StringNullableFilter<"Berita"> | string | null
    tanggal?: DateTimeFilter<"Berita"> | Date | string
    userId?: IntFilter<"Berita"> | number
    createdAt?: DateTimeFilter<"Berita"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BeritaOrderByWithAggregationInput = {
    id?: SortOrder
    judul?: SortOrder
    isi?: SortOrder
    gambar?: SortOrderInput | SortOrder
    tanggal?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: BeritaCountOrderByAggregateInput
    _avg?: BeritaAvgOrderByAggregateInput
    _max?: BeritaMaxOrderByAggregateInput
    _min?: BeritaMinOrderByAggregateInput
    _sum?: BeritaSumOrderByAggregateInput
  }

  export type BeritaScalarWhereWithAggregatesInput = {
    AND?: BeritaScalarWhereWithAggregatesInput | BeritaScalarWhereWithAggregatesInput[]
    OR?: BeritaScalarWhereWithAggregatesInput[]
    NOT?: BeritaScalarWhereWithAggregatesInput | BeritaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Berita"> | number
    judul?: StringWithAggregatesFilter<"Berita"> | string
    isi?: StringWithAggregatesFilter<"Berita"> | string
    gambar?: StringNullableWithAggregatesFilter<"Berita"> | string | null
    tanggal?: DateTimeWithAggregatesFilter<"Berita"> | Date | string
    userId?: IntWithAggregatesFilter<"Berita"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Berita"> | Date | string
  }

  export type LayananWhereInput = {
    AND?: LayananWhereInput | LayananWhereInput[]
    OR?: LayananWhereInput[]
    NOT?: LayananWhereInput | LayananWhereInput[]
    id?: IntFilter<"Layanan"> | number
    namaLayanan?: StringFilter<"Layanan"> | string
    deskripsi?: StringNullableFilter<"Layanan"> | string | null
    createdAt?: DateTimeFilter<"Layanan"> | Date | string
    detail?: LayananDetailListRelationFilter
  }

  export type LayananOrderByWithRelationInput = {
    id?: SortOrder
    namaLayanan?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    detail?: LayananDetailOrderByRelationAggregateInput
  }

  export type LayananWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LayananWhereInput | LayananWhereInput[]
    OR?: LayananWhereInput[]
    NOT?: LayananWhereInput | LayananWhereInput[]
    namaLayanan?: StringFilter<"Layanan"> | string
    deskripsi?: StringNullableFilter<"Layanan"> | string | null
    createdAt?: DateTimeFilter<"Layanan"> | Date | string
    detail?: LayananDetailListRelationFilter
  }, "id">

  export type LayananOrderByWithAggregationInput = {
    id?: SortOrder
    namaLayanan?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LayananCountOrderByAggregateInput
    _avg?: LayananAvgOrderByAggregateInput
    _max?: LayananMaxOrderByAggregateInput
    _min?: LayananMinOrderByAggregateInput
    _sum?: LayananSumOrderByAggregateInput
  }

  export type LayananScalarWhereWithAggregatesInput = {
    AND?: LayananScalarWhereWithAggregatesInput | LayananScalarWhereWithAggregatesInput[]
    OR?: LayananScalarWhereWithAggregatesInput[]
    NOT?: LayananScalarWhereWithAggregatesInput | LayananScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Layanan"> | number
    namaLayanan?: StringWithAggregatesFilter<"Layanan"> | string
    deskripsi?: StringNullableWithAggregatesFilter<"Layanan"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Layanan"> | Date | string
  }

  export type LayananDetailWhereInput = {
    AND?: LayananDetailWhereInput | LayananDetailWhereInput[]
    OR?: LayananDetailWhereInput[]
    NOT?: LayananDetailWhereInput | LayananDetailWhereInput[]
    id?: IntFilter<"LayananDetail"> | number
    layananId?: IntFilter<"LayananDetail"> | number
    namaPaket?: StringFilter<"LayananDetail"> | string
    harga?: DecimalFilter<"LayananDetail"> | Decimal | DecimalJsLike | number | string
    deskripsi?: StringNullableFilter<"LayananDetail"> | string | null
    createdAt?: DateTimeFilter<"LayananDetail"> | Date | string
    layanan?: XOR<LayananScalarRelationFilter, LayananWhereInput>
  }

  export type LayananDetailOrderByWithRelationInput = {
    id?: SortOrder
    layananId?: SortOrder
    namaPaket?: SortOrder
    harga?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    layanan?: LayananOrderByWithRelationInput
  }

  export type LayananDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LayananDetailWhereInput | LayananDetailWhereInput[]
    OR?: LayananDetailWhereInput[]
    NOT?: LayananDetailWhereInput | LayananDetailWhereInput[]
    layananId?: IntFilter<"LayananDetail"> | number
    namaPaket?: StringFilter<"LayananDetail"> | string
    harga?: DecimalFilter<"LayananDetail"> | Decimal | DecimalJsLike | number | string
    deskripsi?: StringNullableFilter<"LayananDetail"> | string | null
    createdAt?: DateTimeFilter<"LayananDetail"> | Date | string
    layanan?: XOR<LayananScalarRelationFilter, LayananWhereInput>
  }, "id">

  export type LayananDetailOrderByWithAggregationInput = {
    id?: SortOrder
    layananId?: SortOrder
    namaPaket?: SortOrder
    harga?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LayananDetailCountOrderByAggregateInput
    _avg?: LayananDetailAvgOrderByAggregateInput
    _max?: LayananDetailMaxOrderByAggregateInput
    _min?: LayananDetailMinOrderByAggregateInput
    _sum?: LayananDetailSumOrderByAggregateInput
  }

  export type LayananDetailScalarWhereWithAggregatesInput = {
    AND?: LayananDetailScalarWhereWithAggregatesInput | LayananDetailScalarWhereWithAggregatesInput[]
    OR?: LayananDetailScalarWhereWithAggregatesInput[]
    NOT?: LayananDetailScalarWhereWithAggregatesInput | LayananDetailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LayananDetail"> | number
    layananId?: IntWithAggregatesFilter<"LayananDetail"> | number
    namaPaket?: StringWithAggregatesFilter<"LayananDetail"> | string
    harga?: DecimalWithAggregatesFilter<"LayananDetail"> | Decimal | DecimalJsLike | number | string
    deskripsi?: StringNullableWithAggregatesFilter<"LayananDetail"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LayananDetail"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    berita?: BeritaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    berita?: BeritaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    berita?: BeritaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    berita?: BeritaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoliCreateInput = {
    namaPoli: string
    createdAt?: Date | string
    dokter?: DokterCreateNestedManyWithoutPoliInput
  }

  export type PoliUncheckedCreateInput = {
    id?: number
    namaPoli: string
    createdAt?: Date | string
    dokter?: DokterUncheckedCreateNestedManyWithoutPoliInput
  }

  export type PoliUpdateInput = {
    namaPoli?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dokter?: DokterUpdateManyWithoutPoliNestedInput
  }

  export type PoliUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaPoli?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dokter?: DokterUncheckedUpdateManyWithoutPoliNestedInput
  }

  export type PoliCreateManyInput = {
    id?: number
    namaPoli: string
    createdAt?: Date | string
  }

  export type PoliUpdateManyMutationInput = {
    namaPoli?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoliUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaPoli?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DokterCreateInput = {
    nama: string
    spesialis: string
    foto?: string | null
    createdAt?: Date | string
    poli: PoliCreateNestedOneWithoutDokterInput
    jadwal?: JadwalDokterCreateNestedManyWithoutDokterInput
  }

  export type DokterUncheckedCreateInput = {
    id?: number
    nama: string
    spesialis: string
    foto?: string | null
    poliId: number
    createdAt?: Date | string
    jadwal?: JadwalDokterUncheckedCreateNestedManyWithoutDokterInput
  }

  export type DokterUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    spesialis?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poli?: PoliUpdateOneRequiredWithoutDokterNestedInput
    jadwal?: JadwalDokterUpdateManyWithoutDokterNestedInput
  }

  export type DokterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    spesialis?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    poliId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jadwal?: JadwalDokterUncheckedUpdateManyWithoutDokterNestedInput
  }

  export type DokterCreateManyInput = {
    id?: number
    nama: string
    spesialis: string
    foto?: string | null
    poliId: number
    createdAt?: Date | string
  }

  export type DokterUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    spesialis?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DokterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    spesialis?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    poliId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JadwalDokterCreateInput = {
    hari: $Enums.Hari
    jamMulai: string
    jamSelesai: string
    createdAt?: Date | string
    dokter: DokterCreateNestedOneWithoutJadwalInput
  }

  export type JadwalDokterUncheckedCreateInput = {
    id?: number
    dokterId: number
    hari: $Enums.Hari
    jamMulai: string
    jamSelesai: string
    createdAt?: Date | string
  }

  export type JadwalDokterUpdateInput = {
    hari?: EnumHariFieldUpdateOperationsInput | $Enums.Hari
    jamMulai?: StringFieldUpdateOperationsInput | string
    jamSelesai?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dokter?: DokterUpdateOneRequiredWithoutJadwalNestedInput
  }

  export type JadwalDokterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dokterId?: IntFieldUpdateOperationsInput | number
    hari?: EnumHariFieldUpdateOperationsInput | $Enums.Hari
    jamMulai?: StringFieldUpdateOperationsInput | string
    jamSelesai?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JadwalDokterCreateManyInput = {
    id?: number
    dokterId: number
    hari: $Enums.Hari
    jamMulai: string
    jamSelesai: string
    createdAt?: Date | string
  }

  export type JadwalDokterUpdateManyMutationInput = {
    hari?: EnumHariFieldUpdateOperationsInput | $Enums.Hari
    jamMulai?: StringFieldUpdateOperationsInput | string
    jamSelesai?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JadwalDokterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dokterId?: IntFieldUpdateOperationsInput | number
    hari?: EnumHariFieldUpdateOperationsInput | $Enums.Hari
    jamMulai?: StringFieldUpdateOperationsInput | string
    jamSelesai?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeritaCreateInput = {
    judul: string
    isi: string
    gambar?: string | null
    tanggal: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBeritaInput
  }

  export type BeritaUncheckedCreateInput = {
    id?: number
    judul: string
    isi: string
    gambar?: string | null
    tanggal: Date | string
    userId: number
    createdAt?: Date | string
  }

  export type BeritaUpdateInput = {
    judul?: StringFieldUpdateOperationsInput | string
    isi?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBeritaNestedInput
  }

  export type BeritaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    isi?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeritaCreateManyInput = {
    id?: number
    judul: string
    isi: string
    gambar?: string | null
    tanggal: Date | string
    userId: number
    createdAt?: Date | string
  }

  export type BeritaUpdateManyMutationInput = {
    judul?: StringFieldUpdateOperationsInput | string
    isi?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeritaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    isi?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LayananCreateInput = {
    namaLayanan: string
    deskripsi?: string | null
    createdAt?: Date | string
    detail?: LayananDetailCreateNestedManyWithoutLayananInput
  }

  export type LayananUncheckedCreateInput = {
    id?: number
    namaLayanan: string
    deskripsi?: string | null
    createdAt?: Date | string
    detail?: LayananDetailUncheckedCreateNestedManyWithoutLayananInput
  }

  export type LayananUpdateInput = {
    namaLayanan?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detail?: LayananDetailUpdateManyWithoutLayananNestedInput
  }

  export type LayananUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaLayanan?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detail?: LayananDetailUncheckedUpdateManyWithoutLayananNestedInput
  }

  export type LayananCreateManyInput = {
    id?: number
    namaLayanan: string
    deskripsi?: string | null
    createdAt?: Date | string
  }

  export type LayananUpdateManyMutationInput = {
    namaLayanan?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LayananUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaLayanan?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LayananDetailCreateInput = {
    namaPaket: string
    harga: Decimal | DecimalJsLike | number | string
    deskripsi?: string | null
    createdAt?: Date | string
    layanan: LayananCreateNestedOneWithoutDetailInput
  }

  export type LayananDetailUncheckedCreateInput = {
    id?: number
    layananId: number
    namaPaket: string
    harga: Decimal | DecimalJsLike | number | string
    deskripsi?: string | null
    createdAt?: Date | string
  }

  export type LayananDetailUpdateInput = {
    namaPaket?: StringFieldUpdateOperationsInput | string
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    layanan?: LayananUpdateOneRequiredWithoutDetailNestedInput
  }

  export type LayananDetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    layananId?: IntFieldUpdateOperationsInput | number
    namaPaket?: StringFieldUpdateOperationsInput | string
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LayananDetailCreateManyInput = {
    id?: number
    layananId: number
    namaPaket: string
    harga: Decimal | DecimalJsLike | number | string
    deskripsi?: string | null
    createdAt?: Date | string
  }

  export type LayananDetailUpdateManyMutationInput = {
    namaPaket?: StringFieldUpdateOperationsInput | string
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LayananDetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    layananId?: IntFieldUpdateOperationsInput | number
    namaPaket?: StringFieldUpdateOperationsInput | string
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BeritaListRelationFilter = {
    every?: BeritaWhereInput
    some?: BeritaWhereInput
    none?: BeritaWhereInput
  }

  export type BeritaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DokterListRelationFilter = {
    every?: DokterWhereInput
    some?: DokterWhereInput
    none?: DokterWhereInput
  }

  export type DokterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PoliCountOrderByAggregateInput = {
    id?: SortOrder
    namaPoli?: SortOrder
    createdAt?: SortOrder
  }

  export type PoliAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PoliMaxOrderByAggregateInput = {
    id?: SortOrder
    namaPoli?: SortOrder
    createdAt?: SortOrder
  }

  export type PoliMinOrderByAggregateInput = {
    id?: SortOrder
    namaPoli?: SortOrder
    createdAt?: SortOrder
  }

  export type PoliSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PoliScalarRelationFilter = {
    is?: PoliWhereInput
    isNot?: PoliWhereInput
  }

  export type JadwalDokterListRelationFilter = {
    every?: JadwalDokterWhereInput
    some?: JadwalDokterWhereInput
    none?: JadwalDokterWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type JadwalDokterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DokterCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    spesialis?: SortOrder
    foto?: SortOrder
    poliId?: SortOrder
    createdAt?: SortOrder
  }

  export type DokterAvgOrderByAggregateInput = {
    id?: SortOrder
    poliId?: SortOrder
  }

  export type DokterMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    spesialis?: SortOrder
    foto?: SortOrder
    poliId?: SortOrder
    createdAt?: SortOrder
  }

  export type DokterMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    spesialis?: SortOrder
    foto?: SortOrder
    poliId?: SortOrder
    createdAt?: SortOrder
  }

  export type DokterSumOrderByAggregateInput = {
    id?: SortOrder
    poliId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumHariFilter<$PrismaModel = never> = {
    equals?: $Enums.Hari | EnumHariFieldRefInput<$PrismaModel>
    in?: $Enums.Hari[] | ListEnumHariFieldRefInput<$PrismaModel>
    notIn?: $Enums.Hari[] | ListEnumHariFieldRefInput<$PrismaModel>
    not?: NestedEnumHariFilter<$PrismaModel> | $Enums.Hari
  }

  export type DokterScalarRelationFilter = {
    is?: DokterWhereInput
    isNot?: DokterWhereInput
  }

  export type JadwalDokterCountOrderByAggregateInput = {
    id?: SortOrder
    dokterId?: SortOrder
    hari?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    createdAt?: SortOrder
  }

  export type JadwalDokterAvgOrderByAggregateInput = {
    id?: SortOrder
    dokterId?: SortOrder
  }

  export type JadwalDokterMaxOrderByAggregateInput = {
    id?: SortOrder
    dokterId?: SortOrder
    hari?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    createdAt?: SortOrder
  }

  export type JadwalDokterMinOrderByAggregateInput = {
    id?: SortOrder
    dokterId?: SortOrder
    hari?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    createdAt?: SortOrder
  }

  export type JadwalDokterSumOrderByAggregateInput = {
    id?: SortOrder
    dokterId?: SortOrder
  }

  export type EnumHariWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Hari | EnumHariFieldRefInput<$PrismaModel>
    in?: $Enums.Hari[] | ListEnumHariFieldRefInput<$PrismaModel>
    notIn?: $Enums.Hari[] | ListEnumHariFieldRefInput<$PrismaModel>
    not?: NestedEnumHariWithAggregatesFilter<$PrismaModel> | $Enums.Hari
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHariFilter<$PrismaModel>
    _max?: NestedEnumHariFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BeritaCountOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    isi?: SortOrder
    gambar?: SortOrder
    tanggal?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type BeritaAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BeritaMaxOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    isi?: SortOrder
    gambar?: SortOrder
    tanggal?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type BeritaMinOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    isi?: SortOrder
    gambar?: SortOrder
    tanggal?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type BeritaSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type LayananDetailListRelationFilter = {
    every?: LayananDetailWhereInput
    some?: LayananDetailWhereInput
    none?: LayananDetailWhereInput
  }

  export type LayananDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LayananCountOrderByAggregateInput = {
    id?: SortOrder
    namaLayanan?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
  }

  export type LayananAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LayananMaxOrderByAggregateInput = {
    id?: SortOrder
    namaLayanan?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
  }

  export type LayananMinOrderByAggregateInput = {
    id?: SortOrder
    namaLayanan?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
  }

  export type LayananSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type LayananScalarRelationFilter = {
    is?: LayananWhereInput
    isNot?: LayananWhereInput
  }

  export type LayananDetailCountOrderByAggregateInput = {
    id?: SortOrder
    layananId?: SortOrder
    namaPaket?: SortOrder
    harga?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
  }

  export type LayananDetailAvgOrderByAggregateInput = {
    id?: SortOrder
    layananId?: SortOrder
    harga?: SortOrder
  }

  export type LayananDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    layananId?: SortOrder
    namaPaket?: SortOrder
    harga?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
  }

  export type LayananDetailMinOrderByAggregateInput = {
    id?: SortOrder
    layananId?: SortOrder
    namaPaket?: SortOrder
    harga?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
  }

  export type LayananDetailSumOrderByAggregateInput = {
    id?: SortOrder
    layananId?: SortOrder
    harga?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BeritaCreateNestedManyWithoutUserInput = {
    create?: XOR<BeritaCreateWithoutUserInput, BeritaUncheckedCreateWithoutUserInput> | BeritaCreateWithoutUserInput[] | BeritaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BeritaCreateOrConnectWithoutUserInput | BeritaCreateOrConnectWithoutUserInput[]
    createMany?: BeritaCreateManyUserInputEnvelope
    connect?: BeritaWhereUniqueInput | BeritaWhereUniqueInput[]
  }

  export type BeritaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BeritaCreateWithoutUserInput, BeritaUncheckedCreateWithoutUserInput> | BeritaCreateWithoutUserInput[] | BeritaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BeritaCreateOrConnectWithoutUserInput | BeritaCreateOrConnectWithoutUserInput[]
    createMany?: BeritaCreateManyUserInputEnvelope
    connect?: BeritaWhereUniqueInput | BeritaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BeritaUpdateManyWithoutUserNestedInput = {
    create?: XOR<BeritaCreateWithoutUserInput, BeritaUncheckedCreateWithoutUserInput> | BeritaCreateWithoutUserInput[] | BeritaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BeritaCreateOrConnectWithoutUserInput | BeritaCreateOrConnectWithoutUserInput[]
    upsert?: BeritaUpsertWithWhereUniqueWithoutUserInput | BeritaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BeritaCreateManyUserInputEnvelope
    set?: BeritaWhereUniqueInput | BeritaWhereUniqueInput[]
    disconnect?: BeritaWhereUniqueInput | BeritaWhereUniqueInput[]
    delete?: BeritaWhereUniqueInput | BeritaWhereUniqueInput[]
    connect?: BeritaWhereUniqueInput | BeritaWhereUniqueInput[]
    update?: BeritaUpdateWithWhereUniqueWithoutUserInput | BeritaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BeritaUpdateManyWithWhereWithoutUserInput | BeritaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BeritaScalarWhereInput | BeritaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BeritaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BeritaCreateWithoutUserInput, BeritaUncheckedCreateWithoutUserInput> | BeritaCreateWithoutUserInput[] | BeritaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BeritaCreateOrConnectWithoutUserInput | BeritaCreateOrConnectWithoutUserInput[]
    upsert?: BeritaUpsertWithWhereUniqueWithoutUserInput | BeritaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BeritaCreateManyUserInputEnvelope
    set?: BeritaWhereUniqueInput | BeritaWhereUniqueInput[]
    disconnect?: BeritaWhereUniqueInput | BeritaWhereUniqueInput[]
    delete?: BeritaWhereUniqueInput | BeritaWhereUniqueInput[]
    connect?: BeritaWhereUniqueInput | BeritaWhereUniqueInput[]
    update?: BeritaUpdateWithWhereUniqueWithoutUserInput | BeritaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BeritaUpdateManyWithWhereWithoutUserInput | BeritaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BeritaScalarWhereInput | BeritaScalarWhereInput[]
  }

  export type DokterCreateNestedManyWithoutPoliInput = {
    create?: XOR<DokterCreateWithoutPoliInput, DokterUncheckedCreateWithoutPoliInput> | DokterCreateWithoutPoliInput[] | DokterUncheckedCreateWithoutPoliInput[]
    connectOrCreate?: DokterCreateOrConnectWithoutPoliInput | DokterCreateOrConnectWithoutPoliInput[]
    createMany?: DokterCreateManyPoliInputEnvelope
    connect?: DokterWhereUniqueInput | DokterWhereUniqueInput[]
  }

  export type DokterUncheckedCreateNestedManyWithoutPoliInput = {
    create?: XOR<DokterCreateWithoutPoliInput, DokterUncheckedCreateWithoutPoliInput> | DokterCreateWithoutPoliInput[] | DokterUncheckedCreateWithoutPoliInput[]
    connectOrCreate?: DokterCreateOrConnectWithoutPoliInput | DokterCreateOrConnectWithoutPoliInput[]
    createMany?: DokterCreateManyPoliInputEnvelope
    connect?: DokterWhereUniqueInput | DokterWhereUniqueInput[]
  }

  export type DokterUpdateManyWithoutPoliNestedInput = {
    create?: XOR<DokterCreateWithoutPoliInput, DokterUncheckedCreateWithoutPoliInput> | DokterCreateWithoutPoliInput[] | DokterUncheckedCreateWithoutPoliInput[]
    connectOrCreate?: DokterCreateOrConnectWithoutPoliInput | DokterCreateOrConnectWithoutPoliInput[]
    upsert?: DokterUpsertWithWhereUniqueWithoutPoliInput | DokterUpsertWithWhereUniqueWithoutPoliInput[]
    createMany?: DokterCreateManyPoliInputEnvelope
    set?: DokterWhereUniqueInput | DokterWhereUniqueInput[]
    disconnect?: DokterWhereUniqueInput | DokterWhereUniqueInput[]
    delete?: DokterWhereUniqueInput | DokterWhereUniqueInput[]
    connect?: DokterWhereUniqueInput | DokterWhereUniqueInput[]
    update?: DokterUpdateWithWhereUniqueWithoutPoliInput | DokterUpdateWithWhereUniqueWithoutPoliInput[]
    updateMany?: DokterUpdateManyWithWhereWithoutPoliInput | DokterUpdateManyWithWhereWithoutPoliInput[]
    deleteMany?: DokterScalarWhereInput | DokterScalarWhereInput[]
  }

  export type DokterUncheckedUpdateManyWithoutPoliNestedInput = {
    create?: XOR<DokterCreateWithoutPoliInput, DokterUncheckedCreateWithoutPoliInput> | DokterCreateWithoutPoliInput[] | DokterUncheckedCreateWithoutPoliInput[]
    connectOrCreate?: DokterCreateOrConnectWithoutPoliInput | DokterCreateOrConnectWithoutPoliInput[]
    upsert?: DokterUpsertWithWhereUniqueWithoutPoliInput | DokterUpsertWithWhereUniqueWithoutPoliInput[]
    createMany?: DokterCreateManyPoliInputEnvelope
    set?: DokterWhereUniqueInput | DokterWhereUniqueInput[]
    disconnect?: DokterWhereUniqueInput | DokterWhereUniqueInput[]
    delete?: DokterWhereUniqueInput | DokterWhereUniqueInput[]
    connect?: DokterWhereUniqueInput | DokterWhereUniqueInput[]
    update?: DokterUpdateWithWhereUniqueWithoutPoliInput | DokterUpdateWithWhereUniqueWithoutPoliInput[]
    updateMany?: DokterUpdateManyWithWhereWithoutPoliInput | DokterUpdateManyWithWhereWithoutPoliInput[]
    deleteMany?: DokterScalarWhereInput | DokterScalarWhereInput[]
  }

  export type PoliCreateNestedOneWithoutDokterInput = {
    create?: XOR<PoliCreateWithoutDokterInput, PoliUncheckedCreateWithoutDokterInput>
    connectOrCreate?: PoliCreateOrConnectWithoutDokterInput
    connect?: PoliWhereUniqueInput
  }

  export type JadwalDokterCreateNestedManyWithoutDokterInput = {
    create?: XOR<JadwalDokterCreateWithoutDokterInput, JadwalDokterUncheckedCreateWithoutDokterInput> | JadwalDokterCreateWithoutDokterInput[] | JadwalDokterUncheckedCreateWithoutDokterInput[]
    connectOrCreate?: JadwalDokterCreateOrConnectWithoutDokterInput | JadwalDokterCreateOrConnectWithoutDokterInput[]
    createMany?: JadwalDokterCreateManyDokterInputEnvelope
    connect?: JadwalDokterWhereUniqueInput | JadwalDokterWhereUniqueInput[]
  }

  export type JadwalDokterUncheckedCreateNestedManyWithoutDokterInput = {
    create?: XOR<JadwalDokterCreateWithoutDokterInput, JadwalDokterUncheckedCreateWithoutDokterInput> | JadwalDokterCreateWithoutDokterInput[] | JadwalDokterUncheckedCreateWithoutDokterInput[]
    connectOrCreate?: JadwalDokterCreateOrConnectWithoutDokterInput | JadwalDokterCreateOrConnectWithoutDokterInput[]
    createMany?: JadwalDokterCreateManyDokterInputEnvelope
    connect?: JadwalDokterWhereUniqueInput | JadwalDokterWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PoliUpdateOneRequiredWithoutDokterNestedInput = {
    create?: XOR<PoliCreateWithoutDokterInput, PoliUncheckedCreateWithoutDokterInput>
    connectOrCreate?: PoliCreateOrConnectWithoutDokterInput
    upsert?: PoliUpsertWithoutDokterInput
    connect?: PoliWhereUniqueInput
    update?: XOR<XOR<PoliUpdateToOneWithWhereWithoutDokterInput, PoliUpdateWithoutDokterInput>, PoliUncheckedUpdateWithoutDokterInput>
  }

  export type JadwalDokterUpdateManyWithoutDokterNestedInput = {
    create?: XOR<JadwalDokterCreateWithoutDokterInput, JadwalDokterUncheckedCreateWithoutDokterInput> | JadwalDokterCreateWithoutDokterInput[] | JadwalDokterUncheckedCreateWithoutDokterInput[]
    connectOrCreate?: JadwalDokterCreateOrConnectWithoutDokterInput | JadwalDokterCreateOrConnectWithoutDokterInput[]
    upsert?: JadwalDokterUpsertWithWhereUniqueWithoutDokterInput | JadwalDokterUpsertWithWhereUniqueWithoutDokterInput[]
    createMany?: JadwalDokterCreateManyDokterInputEnvelope
    set?: JadwalDokterWhereUniqueInput | JadwalDokterWhereUniqueInput[]
    disconnect?: JadwalDokterWhereUniqueInput | JadwalDokterWhereUniqueInput[]
    delete?: JadwalDokterWhereUniqueInput | JadwalDokterWhereUniqueInput[]
    connect?: JadwalDokterWhereUniqueInput | JadwalDokterWhereUniqueInput[]
    update?: JadwalDokterUpdateWithWhereUniqueWithoutDokterInput | JadwalDokterUpdateWithWhereUniqueWithoutDokterInput[]
    updateMany?: JadwalDokterUpdateManyWithWhereWithoutDokterInput | JadwalDokterUpdateManyWithWhereWithoutDokterInput[]
    deleteMany?: JadwalDokterScalarWhereInput | JadwalDokterScalarWhereInput[]
  }

  export type JadwalDokterUncheckedUpdateManyWithoutDokterNestedInput = {
    create?: XOR<JadwalDokterCreateWithoutDokterInput, JadwalDokterUncheckedCreateWithoutDokterInput> | JadwalDokterCreateWithoutDokterInput[] | JadwalDokterUncheckedCreateWithoutDokterInput[]
    connectOrCreate?: JadwalDokterCreateOrConnectWithoutDokterInput | JadwalDokterCreateOrConnectWithoutDokterInput[]
    upsert?: JadwalDokterUpsertWithWhereUniqueWithoutDokterInput | JadwalDokterUpsertWithWhereUniqueWithoutDokterInput[]
    createMany?: JadwalDokterCreateManyDokterInputEnvelope
    set?: JadwalDokterWhereUniqueInput | JadwalDokterWhereUniqueInput[]
    disconnect?: JadwalDokterWhereUniqueInput | JadwalDokterWhereUniqueInput[]
    delete?: JadwalDokterWhereUniqueInput | JadwalDokterWhereUniqueInput[]
    connect?: JadwalDokterWhereUniqueInput | JadwalDokterWhereUniqueInput[]
    update?: JadwalDokterUpdateWithWhereUniqueWithoutDokterInput | JadwalDokterUpdateWithWhereUniqueWithoutDokterInput[]
    updateMany?: JadwalDokterUpdateManyWithWhereWithoutDokterInput | JadwalDokterUpdateManyWithWhereWithoutDokterInput[]
    deleteMany?: JadwalDokterScalarWhereInput | JadwalDokterScalarWhereInput[]
  }

  export type DokterCreateNestedOneWithoutJadwalInput = {
    create?: XOR<DokterCreateWithoutJadwalInput, DokterUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: DokterCreateOrConnectWithoutJadwalInput
    connect?: DokterWhereUniqueInput
  }

  export type EnumHariFieldUpdateOperationsInput = {
    set?: $Enums.Hari
  }

  export type DokterUpdateOneRequiredWithoutJadwalNestedInput = {
    create?: XOR<DokterCreateWithoutJadwalInput, DokterUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: DokterCreateOrConnectWithoutJadwalInput
    upsert?: DokterUpsertWithoutJadwalInput
    connect?: DokterWhereUniqueInput
    update?: XOR<XOR<DokterUpdateToOneWithWhereWithoutJadwalInput, DokterUpdateWithoutJadwalInput>, DokterUncheckedUpdateWithoutJadwalInput>
  }

  export type UserCreateNestedOneWithoutBeritaInput = {
    create?: XOR<UserCreateWithoutBeritaInput, UserUncheckedCreateWithoutBeritaInput>
    connectOrCreate?: UserCreateOrConnectWithoutBeritaInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBeritaNestedInput = {
    create?: XOR<UserCreateWithoutBeritaInput, UserUncheckedCreateWithoutBeritaInput>
    connectOrCreate?: UserCreateOrConnectWithoutBeritaInput
    upsert?: UserUpsertWithoutBeritaInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBeritaInput, UserUpdateWithoutBeritaInput>, UserUncheckedUpdateWithoutBeritaInput>
  }

  export type LayananDetailCreateNestedManyWithoutLayananInput = {
    create?: XOR<LayananDetailCreateWithoutLayananInput, LayananDetailUncheckedCreateWithoutLayananInput> | LayananDetailCreateWithoutLayananInput[] | LayananDetailUncheckedCreateWithoutLayananInput[]
    connectOrCreate?: LayananDetailCreateOrConnectWithoutLayananInput | LayananDetailCreateOrConnectWithoutLayananInput[]
    createMany?: LayananDetailCreateManyLayananInputEnvelope
    connect?: LayananDetailWhereUniqueInput | LayananDetailWhereUniqueInput[]
  }

  export type LayananDetailUncheckedCreateNestedManyWithoutLayananInput = {
    create?: XOR<LayananDetailCreateWithoutLayananInput, LayananDetailUncheckedCreateWithoutLayananInput> | LayananDetailCreateWithoutLayananInput[] | LayananDetailUncheckedCreateWithoutLayananInput[]
    connectOrCreate?: LayananDetailCreateOrConnectWithoutLayananInput | LayananDetailCreateOrConnectWithoutLayananInput[]
    createMany?: LayananDetailCreateManyLayananInputEnvelope
    connect?: LayananDetailWhereUniqueInput | LayananDetailWhereUniqueInput[]
  }

  export type LayananDetailUpdateManyWithoutLayananNestedInput = {
    create?: XOR<LayananDetailCreateWithoutLayananInput, LayananDetailUncheckedCreateWithoutLayananInput> | LayananDetailCreateWithoutLayananInput[] | LayananDetailUncheckedCreateWithoutLayananInput[]
    connectOrCreate?: LayananDetailCreateOrConnectWithoutLayananInput | LayananDetailCreateOrConnectWithoutLayananInput[]
    upsert?: LayananDetailUpsertWithWhereUniqueWithoutLayananInput | LayananDetailUpsertWithWhereUniqueWithoutLayananInput[]
    createMany?: LayananDetailCreateManyLayananInputEnvelope
    set?: LayananDetailWhereUniqueInput | LayananDetailWhereUniqueInput[]
    disconnect?: LayananDetailWhereUniqueInput | LayananDetailWhereUniqueInput[]
    delete?: LayananDetailWhereUniqueInput | LayananDetailWhereUniqueInput[]
    connect?: LayananDetailWhereUniqueInput | LayananDetailWhereUniqueInput[]
    update?: LayananDetailUpdateWithWhereUniqueWithoutLayananInput | LayananDetailUpdateWithWhereUniqueWithoutLayananInput[]
    updateMany?: LayananDetailUpdateManyWithWhereWithoutLayananInput | LayananDetailUpdateManyWithWhereWithoutLayananInput[]
    deleteMany?: LayananDetailScalarWhereInput | LayananDetailScalarWhereInput[]
  }

  export type LayananDetailUncheckedUpdateManyWithoutLayananNestedInput = {
    create?: XOR<LayananDetailCreateWithoutLayananInput, LayananDetailUncheckedCreateWithoutLayananInput> | LayananDetailCreateWithoutLayananInput[] | LayananDetailUncheckedCreateWithoutLayananInput[]
    connectOrCreate?: LayananDetailCreateOrConnectWithoutLayananInput | LayananDetailCreateOrConnectWithoutLayananInput[]
    upsert?: LayananDetailUpsertWithWhereUniqueWithoutLayananInput | LayananDetailUpsertWithWhereUniqueWithoutLayananInput[]
    createMany?: LayananDetailCreateManyLayananInputEnvelope
    set?: LayananDetailWhereUniqueInput | LayananDetailWhereUniqueInput[]
    disconnect?: LayananDetailWhereUniqueInput | LayananDetailWhereUniqueInput[]
    delete?: LayananDetailWhereUniqueInput | LayananDetailWhereUniqueInput[]
    connect?: LayananDetailWhereUniqueInput | LayananDetailWhereUniqueInput[]
    update?: LayananDetailUpdateWithWhereUniqueWithoutLayananInput | LayananDetailUpdateWithWhereUniqueWithoutLayananInput[]
    updateMany?: LayananDetailUpdateManyWithWhereWithoutLayananInput | LayananDetailUpdateManyWithWhereWithoutLayananInput[]
    deleteMany?: LayananDetailScalarWhereInput | LayananDetailScalarWhereInput[]
  }

  export type LayananCreateNestedOneWithoutDetailInput = {
    create?: XOR<LayananCreateWithoutDetailInput, LayananUncheckedCreateWithoutDetailInput>
    connectOrCreate?: LayananCreateOrConnectWithoutDetailInput
    connect?: LayananWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type LayananUpdateOneRequiredWithoutDetailNestedInput = {
    create?: XOR<LayananCreateWithoutDetailInput, LayananUncheckedCreateWithoutDetailInput>
    connectOrCreate?: LayananCreateOrConnectWithoutDetailInput
    upsert?: LayananUpsertWithoutDetailInput
    connect?: LayananWhereUniqueInput
    update?: XOR<XOR<LayananUpdateToOneWithWhereWithoutDetailInput, LayananUpdateWithoutDetailInput>, LayananUncheckedUpdateWithoutDetailInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumHariFilter<$PrismaModel = never> = {
    equals?: $Enums.Hari | EnumHariFieldRefInput<$PrismaModel>
    in?: $Enums.Hari[] | ListEnumHariFieldRefInput<$PrismaModel>
    notIn?: $Enums.Hari[] | ListEnumHariFieldRefInput<$PrismaModel>
    not?: NestedEnumHariFilter<$PrismaModel> | $Enums.Hari
  }

  export type NestedEnumHariWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Hari | EnumHariFieldRefInput<$PrismaModel>
    in?: $Enums.Hari[] | ListEnumHariFieldRefInput<$PrismaModel>
    notIn?: $Enums.Hari[] | ListEnumHariFieldRefInput<$PrismaModel>
    not?: NestedEnumHariWithAggregatesFilter<$PrismaModel> | $Enums.Hari
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHariFilter<$PrismaModel>
    _max?: NestedEnumHariFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BeritaCreateWithoutUserInput = {
    judul: string
    isi: string
    gambar?: string | null
    tanggal: Date | string
    createdAt?: Date | string
  }

  export type BeritaUncheckedCreateWithoutUserInput = {
    id?: number
    judul: string
    isi: string
    gambar?: string | null
    tanggal: Date | string
    createdAt?: Date | string
  }

  export type BeritaCreateOrConnectWithoutUserInput = {
    where: BeritaWhereUniqueInput
    create: XOR<BeritaCreateWithoutUserInput, BeritaUncheckedCreateWithoutUserInput>
  }

  export type BeritaCreateManyUserInputEnvelope = {
    data: BeritaCreateManyUserInput | BeritaCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BeritaUpsertWithWhereUniqueWithoutUserInput = {
    where: BeritaWhereUniqueInput
    update: XOR<BeritaUpdateWithoutUserInput, BeritaUncheckedUpdateWithoutUserInput>
    create: XOR<BeritaCreateWithoutUserInput, BeritaUncheckedCreateWithoutUserInput>
  }

  export type BeritaUpdateWithWhereUniqueWithoutUserInput = {
    where: BeritaWhereUniqueInput
    data: XOR<BeritaUpdateWithoutUserInput, BeritaUncheckedUpdateWithoutUserInput>
  }

  export type BeritaUpdateManyWithWhereWithoutUserInput = {
    where: BeritaScalarWhereInput
    data: XOR<BeritaUpdateManyMutationInput, BeritaUncheckedUpdateManyWithoutUserInput>
  }

  export type BeritaScalarWhereInput = {
    AND?: BeritaScalarWhereInput | BeritaScalarWhereInput[]
    OR?: BeritaScalarWhereInput[]
    NOT?: BeritaScalarWhereInput | BeritaScalarWhereInput[]
    id?: IntFilter<"Berita"> | number
    judul?: StringFilter<"Berita"> | string
    isi?: StringFilter<"Berita"> | string
    gambar?: StringNullableFilter<"Berita"> | string | null
    tanggal?: DateTimeFilter<"Berita"> | Date | string
    userId?: IntFilter<"Berita"> | number
    createdAt?: DateTimeFilter<"Berita"> | Date | string
  }

  export type DokterCreateWithoutPoliInput = {
    nama: string
    spesialis: string
    foto?: string | null
    createdAt?: Date | string
    jadwal?: JadwalDokterCreateNestedManyWithoutDokterInput
  }

  export type DokterUncheckedCreateWithoutPoliInput = {
    id?: number
    nama: string
    spesialis: string
    foto?: string | null
    createdAt?: Date | string
    jadwal?: JadwalDokterUncheckedCreateNestedManyWithoutDokterInput
  }

  export type DokterCreateOrConnectWithoutPoliInput = {
    where: DokterWhereUniqueInput
    create: XOR<DokterCreateWithoutPoliInput, DokterUncheckedCreateWithoutPoliInput>
  }

  export type DokterCreateManyPoliInputEnvelope = {
    data: DokterCreateManyPoliInput | DokterCreateManyPoliInput[]
    skipDuplicates?: boolean
  }

  export type DokterUpsertWithWhereUniqueWithoutPoliInput = {
    where: DokterWhereUniqueInput
    update: XOR<DokterUpdateWithoutPoliInput, DokterUncheckedUpdateWithoutPoliInput>
    create: XOR<DokterCreateWithoutPoliInput, DokterUncheckedCreateWithoutPoliInput>
  }

  export type DokterUpdateWithWhereUniqueWithoutPoliInput = {
    where: DokterWhereUniqueInput
    data: XOR<DokterUpdateWithoutPoliInput, DokterUncheckedUpdateWithoutPoliInput>
  }

  export type DokterUpdateManyWithWhereWithoutPoliInput = {
    where: DokterScalarWhereInput
    data: XOR<DokterUpdateManyMutationInput, DokterUncheckedUpdateManyWithoutPoliInput>
  }

  export type DokterScalarWhereInput = {
    AND?: DokterScalarWhereInput | DokterScalarWhereInput[]
    OR?: DokterScalarWhereInput[]
    NOT?: DokterScalarWhereInput | DokterScalarWhereInput[]
    id?: IntFilter<"Dokter"> | number
    nama?: StringFilter<"Dokter"> | string
    spesialis?: StringFilter<"Dokter"> | string
    foto?: StringNullableFilter<"Dokter"> | string | null
    poliId?: IntFilter<"Dokter"> | number
    createdAt?: DateTimeFilter<"Dokter"> | Date | string
  }

  export type PoliCreateWithoutDokterInput = {
    namaPoli: string
    createdAt?: Date | string
  }

  export type PoliUncheckedCreateWithoutDokterInput = {
    id?: number
    namaPoli: string
    createdAt?: Date | string
  }

  export type PoliCreateOrConnectWithoutDokterInput = {
    where: PoliWhereUniqueInput
    create: XOR<PoliCreateWithoutDokterInput, PoliUncheckedCreateWithoutDokterInput>
  }

  export type JadwalDokterCreateWithoutDokterInput = {
    hari: $Enums.Hari
    jamMulai: string
    jamSelesai: string
    createdAt?: Date | string
  }

  export type JadwalDokterUncheckedCreateWithoutDokterInput = {
    id?: number
    hari: $Enums.Hari
    jamMulai: string
    jamSelesai: string
    createdAt?: Date | string
  }

  export type JadwalDokterCreateOrConnectWithoutDokterInput = {
    where: JadwalDokterWhereUniqueInput
    create: XOR<JadwalDokterCreateWithoutDokterInput, JadwalDokterUncheckedCreateWithoutDokterInput>
  }

  export type JadwalDokterCreateManyDokterInputEnvelope = {
    data: JadwalDokterCreateManyDokterInput | JadwalDokterCreateManyDokterInput[]
    skipDuplicates?: boolean
  }

  export type PoliUpsertWithoutDokterInput = {
    update: XOR<PoliUpdateWithoutDokterInput, PoliUncheckedUpdateWithoutDokterInput>
    create: XOR<PoliCreateWithoutDokterInput, PoliUncheckedCreateWithoutDokterInput>
    where?: PoliWhereInput
  }

  export type PoliUpdateToOneWithWhereWithoutDokterInput = {
    where?: PoliWhereInput
    data: XOR<PoliUpdateWithoutDokterInput, PoliUncheckedUpdateWithoutDokterInput>
  }

  export type PoliUpdateWithoutDokterInput = {
    namaPoli?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoliUncheckedUpdateWithoutDokterInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaPoli?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JadwalDokterUpsertWithWhereUniqueWithoutDokterInput = {
    where: JadwalDokterWhereUniqueInput
    update: XOR<JadwalDokterUpdateWithoutDokterInput, JadwalDokterUncheckedUpdateWithoutDokterInput>
    create: XOR<JadwalDokterCreateWithoutDokterInput, JadwalDokterUncheckedCreateWithoutDokterInput>
  }

  export type JadwalDokterUpdateWithWhereUniqueWithoutDokterInput = {
    where: JadwalDokterWhereUniqueInput
    data: XOR<JadwalDokterUpdateWithoutDokterInput, JadwalDokterUncheckedUpdateWithoutDokterInput>
  }

  export type JadwalDokterUpdateManyWithWhereWithoutDokterInput = {
    where: JadwalDokterScalarWhereInput
    data: XOR<JadwalDokterUpdateManyMutationInput, JadwalDokterUncheckedUpdateManyWithoutDokterInput>
  }

  export type JadwalDokterScalarWhereInput = {
    AND?: JadwalDokterScalarWhereInput | JadwalDokterScalarWhereInput[]
    OR?: JadwalDokterScalarWhereInput[]
    NOT?: JadwalDokterScalarWhereInput | JadwalDokterScalarWhereInput[]
    id?: IntFilter<"JadwalDokter"> | number
    dokterId?: IntFilter<"JadwalDokter"> | number
    hari?: EnumHariFilter<"JadwalDokter"> | $Enums.Hari
    jamMulai?: StringFilter<"JadwalDokter"> | string
    jamSelesai?: StringFilter<"JadwalDokter"> | string
    createdAt?: DateTimeFilter<"JadwalDokter"> | Date | string
  }

  export type DokterCreateWithoutJadwalInput = {
    nama: string
    spesialis: string
    foto?: string | null
    createdAt?: Date | string
    poli: PoliCreateNestedOneWithoutDokterInput
  }

  export type DokterUncheckedCreateWithoutJadwalInput = {
    id?: number
    nama: string
    spesialis: string
    foto?: string | null
    poliId: number
    createdAt?: Date | string
  }

  export type DokterCreateOrConnectWithoutJadwalInput = {
    where: DokterWhereUniqueInput
    create: XOR<DokterCreateWithoutJadwalInput, DokterUncheckedCreateWithoutJadwalInput>
  }

  export type DokterUpsertWithoutJadwalInput = {
    update: XOR<DokterUpdateWithoutJadwalInput, DokterUncheckedUpdateWithoutJadwalInput>
    create: XOR<DokterCreateWithoutJadwalInput, DokterUncheckedCreateWithoutJadwalInput>
    where?: DokterWhereInput
  }

  export type DokterUpdateToOneWithWhereWithoutJadwalInput = {
    where?: DokterWhereInput
    data: XOR<DokterUpdateWithoutJadwalInput, DokterUncheckedUpdateWithoutJadwalInput>
  }

  export type DokterUpdateWithoutJadwalInput = {
    nama?: StringFieldUpdateOperationsInput | string
    spesialis?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poli?: PoliUpdateOneRequiredWithoutDokterNestedInput
  }

  export type DokterUncheckedUpdateWithoutJadwalInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    spesialis?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    poliId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutBeritaInput = {
    username: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutBeritaInput = {
    id?: number
    username: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutBeritaInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBeritaInput, UserUncheckedCreateWithoutBeritaInput>
  }

  export type UserUpsertWithoutBeritaInput = {
    update: XOR<UserUpdateWithoutBeritaInput, UserUncheckedUpdateWithoutBeritaInput>
    create: XOR<UserCreateWithoutBeritaInput, UserUncheckedCreateWithoutBeritaInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBeritaInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBeritaInput, UserUncheckedUpdateWithoutBeritaInput>
  }

  export type UserUpdateWithoutBeritaInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutBeritaInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LayananDetailCreateWithoutLayananInput = {
    namaPaket: string
    harga: Decimal | DecimalJsLike | number | string
    deskripsi?: string | null
    createdAt?: Date | string
  }

  export type LayananDetailUncheckedCreateWithoutLayananInput = {
    id?: number
    namaPaket: string
    harga: Decimal | DecimalJsLike | number | string
    deskripsi?: string | null
    createdAt?: Date | string
  }

  export type LayananDetailCreateOrConnectWithoutLayananInput = {
    where: LayananDetailWhereUniqueInput
    create: XOR<LayananDetailCreateWithoutLayananInput, LayananDetailUncheckedCreateWithoutLayananInput>
  }

  export type LayananDetailCreateManyLayananInputEnvelope = {
    data: LayananDetailCreateManyLayananInput | LayananDetailCreateManyLayananInput[]
    skipDuplicates?: boolean
  }

  export type LayananDetailUpsertWithWhereUniqueWithoutLayananInput = {
    where: LayananDetailWhereUniqueInput
    update: XOR<LayananDetailUpdateWithoutLayananInput, LayananDetailUncheckedUpdateWithoutLayananInput>
    create: XOR<LayananDetailCreateWithoutLayananInput, LayananDetailUncheckedCreateWithoutLayananInput>
  }

  export type LayananDetailUpdateWithWhereUniqueWithoutLayananInput = {
    where: LayananDetailWhereUniqueInput
    data: XOR<LayananDetailUpdateWithoutLayananInput, LayananDetailUncheckedUpdateWithoutLayananInput>
  }

  export type LayananDetailUpdateManyWithWhereWithoutLayananInput = {
    where: LayananDetailScalarWhereInput
    data: XOR<LayananDetailUpdateManyMutationInput, LayananDetailUncheckedUpdateManyWithoutLayananInput>
  }

  export type LayananDetailScalarWhereInput = {
    AND?: LayananDetailScalarWhereInput | LayananDetailScalarWhereInput[]
    OR?: LayananDetailScalarWhereInput[]
    NOT?: LayananDetailScalarWhereInput | LayananDetailScalarWhereInput[]
    id?: IntFilter<"LayananDetail"> | number
    layananId?: IntFilter<"LayananDetail"> | number
    namaPaket?: StringFilter<"LayananDetail"> | string
    harga?: DecimalFilter<"LayananDetail"> | Decimal | DecimalJsLike | number | string
    deskripsi?: StringNullableFilter<"LayananDetail"> | string | null
    createdAt?: DateTimeFilter<"LayananDetail"> | Date | string
  }

  export type LayananCreateWithoutDetailInput = {
    namaLayanan: string
    deskripsi?: string | null
    createdAt?: Date | string
  }

  export type LayananUncheckedCreateWithoutDetailInput = {
    id?: number
    namaLayanan: string
    deskripsi?: string | null
    createdAt?: Date | string
  }

  export type LayananCreateOrConnectWithoutDetailInput = {
    where: LayananWhereUniqueInput
    create: XOR<LayananCreateWithoutDetailInput, LayananUncheckedCreateWithoutDetailInput>
  }

  export type LayananUpsertWithoutDetailInput = {
    update: XOR<LayananUpdateWithoutDetailInput, LayananUncheckedUpdateWithoutDetailInput>
    create: XOR<LayananCreateWithoutDetailInput, LayananUncheckedCreateWithoutDetailInput>
    where?: LayananWhereInput
  }

  export type LayananUpdateToOneWithWhereWithoutDetailInput = {
    where?: LayananWhereInput
    data: XOR<LayananUpdateWithoutDetailInput, LayananUncheckedUpdateWithoutDetailInput>
  }

  export type LayananUpdateWithoutDetailInput = {
    namaLayanan?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LayananUncheckedUpdateWithoutDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaLayanan?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeritaCreateManyUserInput = {
    id?: number
    judul: string
    isi: string
    gambar?: string | null
    tanggal: Date | string
    createdAt?: Date | string
  }

  export type BeritaUpdateWithoutUserInput = {
    judul?: StringFieldUpdateOperationsInput | string
    isi?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeritaUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    isi?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeritaUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    isi?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DokterCreateManyPoliInput = {
    id?: number
    nama: string
    spesialis: string
    foto?: string | null
    createdAt?: Date | string
  }

  export type DokterUpdateWithoutPoliInput = {
    nama?: StringFieldUpdateOperationsInput | string
    spesialis?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jadwal?: JadwalDokterUpdateManyWithoutDokterNestedInput
  }

  export type DokterUncheckedUpdateWithoutPoliInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    spesialis?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jadwal?: JadwalDokterUncheckedUpdateManyWithoutDokterNestedInput
  }

  export type DokterUncheckedUpdateManyWithoutPoliInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    spesialis?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JadwalDokterCreateManyDokterInput = {
    id?: number
    hari: $Enums.Hari
    jamMulai: string
    jamSelesai: string
    createdAt?: Date | string
  }

  export type JadwalDokterUpdateWithoutDokterInput = {
    hari?: EnumHariFieldUpdateOperationsInput | $Enums.Hari
    jamMulai?: StringFieldUpdateOperationsInput | string
    jamSelesai?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JadwalDokterUncheckedUpdateWithoutDokterInput = {
    id?: IntFieldUpdateOperationsInput | number
    hari?: EnumHariFieldUpdateOperationsInput | $Enums.Hari
    jamMulai?: StringFieldUpdateOperationsInput | string
    jamSelesai?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JadwalDokterUncheckedUpdateManyWithoutDokterInput = {
    id?: IntFieldUpdateOperationsInput | number
    hari?: EnumHariFieldUpdateOperationsInput | $Enums.Hari
    jamMulai?: StringFieldUpdateOperationsInput | string
    jamSelesai?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LayananDetailCreateManyLayananInput = {
    id?: number
    namaPaket: string
    harga: Decimal | DecimalJsLike | number | string
    deskripsi?: string | null
    createdAt?: Date | string
  }

  export type LayananDetailUpdateWithoutLayananInput = {
    namaPaket?: StringFieldUpdateOperationsInput | string
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LayananDetailUncheckedUpdateWithoutLayananInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaPaket?: StringFieldUpdateOperationsInput | string
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LayananDetailUncheckedUpdateManyWithoutLayananInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaPaket?: StringFieldUpdateOperationsInput | string
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}