
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
 * Model attachments
 * 
 */
export type attachments = $Result.DefaultSelection<Prisma.$attachmentsPayload>
/**
 * Model subtask
 * 
 */
export type subtask = $Result.DefaultSelection<Prisma.$subtaskPayload>
/**
 * Model task
 * 
 */
export type task = $Result.DefaultSelection<Prisma.$taskPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const provider_type: {
  local: 'local',
  facebook: 'facebook',
  googlefb_and_google: 'googlefb_and_google'
};

export type provider_type = (typeof provider_type)[keyof typeof provider_type]


export const subtask_status: {
  done: 'done',
  not_done: 'not_done'
};

export type subtask_status = (typeof subtask_status)[keyof typeof subtask_status]


export const task_priority: {
  low: 'low',
  high: 'high',
  critical: 'critical'
};

export type task_priority = (typeof task_priority)[keyof typeof task_priority]


export const task_status: {
  not_started: 'not_started',
  in_progress: 'in_progress',
  completed: 'completed',
  cancelled: 'cancelled'
};

export type task_status = (typeof task_status)[keyof typeof task_status]

}

export type provider_type = $Enums.provider_type

export const provider_type: typeof $Enums.provider_type

export type subtask_status = $Enums.subtask_status

export const subtask_status: typeof $Enums.subtask_status

export type task_priority = $Enums.task_priority

export const task_priority: typeof $Enums.task_priority

export type task_status = $Enums.task_status

export const task_status: typeof $Enums.task_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Attachments
 * const attachments = await prisma.attachments.findMany()
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
   * // Fetch zero or more Attachments
   * const attachments = await prisma.attachments.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.attachments`: Exposes CRUD operations for the **attachments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attachments
    * const attachments = await prisma.attachments.findMany()
    * ```
    */
  get attachments(): Prisma.attachmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subtask`: Exposes CRUD operations for the **subtask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subtasks
    * const subtasks = await prisma.subtask.findMany()
    * ```
    */
  get subtask(): Prisma.subtaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.taskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
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
    attachments: 'attachments',
    subtask: 'subtask',
    task: 'task',
    users: 'users'
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
      modelProps: "attachments" | "subtask" | "task" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      attachments: {
        payload: Prisma.$attachmentsPayload<ExtArgs>
        fields: Prisma.attachmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.attachmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.attachmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentsPayload>
          }
          findFirst: {
            args: Prisma.attachmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.attachmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentsPayload>
          }
          findMany: {
            args: Prisma.attachmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentsPayload>[]
          }
          create: {
            args: Prisma.attachmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentsPayload>
          }
          createMany: {
            args: Prisma.attachmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.attachmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentsPayload>[]
          }
          delete: {
            args: Prisma.attachmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentsPayload>
          }
          update: {
            args: Prisma.attachmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentsPayload>
          }
          deleteMany: {
            args: Prisma.attachmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.attachmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.attachmentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentsPayload>[]
          }
          upsert: {
            args: Prisma.attachmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentsPayload>
          }
          aggregate: {
            args: Prisma.AttachmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttachments>
          }
          groupBy: {
            args: Prisma.attachmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttachmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.attachmentsCountArgs<ExtArgs>
            result: $Utils.Optional<AttachmentsCountAggregateOutputType> | number
          }
        }
      }
      subtask: {
        payload: Prisma.$subtaskPayload<ExtArgs>
        fields: Prisma.subtaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subtaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subtaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subtaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subtaskPayload>
          }
          findFirst: {
            args: Prisma.subtaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subtaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subtaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subtaskPayload>
          }
          findMany: {
            args: Prisma.subtaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subtaskPayload>[]
          }
          create: {
            args: Prisma.subtaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subtaskPayload>
          }
          createMany: {
            args: Prisma.subtaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.subtaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subtaskPayload>[]
          }
          delete: {
            args: Prisma.subtaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subtaskPayload>
          }
          update: {
            args: Prisma.subtaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subtaskPayload>
          }
          deleteMany: {
            args: Prisma.subtaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.subtaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.subtaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subtaskPayload>[]
          }
          upsert: {
            args: Prisma.subtaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subtaskPayload>
          }
          aggregate: {
            args: Prisma.SubtaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubtask>
          }
          groupBy: {
            args: Prisma.subtaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubtaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.subtaskCountArgs<ExtArgs>
            result: $Utils.Optional<SubtaskCountAggregateOutputType> | number
          }
        }
      }
      task: {
        payload: Prisma.$taskPayload<ExtArgs>
        fields: Prisma.taskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.taskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.taskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          findFirst: {
            args: Prisma.taskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.taskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          findMany: {
            args: Prisma.taskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>[]
          }
          create: {
            args: Prisma.taskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          createMany: {
            args: Prisma.taskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.taskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>[]
          }
          delete: {
            args: Prisma.taskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          update: {
            args: Prisma.taskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          deleteMany: {
            args: Prisma.taskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.taskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.taskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>[]
          }
          upsert: {
            args: Prisma.taskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.taskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.taskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
    attachments?: attachmentsOmit
    subtask?: subtaskOmit
    task?: taskOmit
    users?: usersOmit
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
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    attachments: number
    subtask: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attachments?: boolean | TaskCountOutputTypeCountAttachmentsArgs
    subtask?: boolean | TaskCountOutputTypeCountSubtaskArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attachmentsWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountSubtaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subtaskWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    task: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | UsersCountOutputTypeCountTaskArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taskWhereInput
  }


  /**
   * Models
   */

  /**
   * Model attachments
   */

  export type AggregateAttachments = {
    _count: AttachmentsCountAggregateOutputType | null
    _avg: AttachmentsAvgAggregateOutputType | null
    _sum: AttachmentsSumAggregateOutputType | null
    _min: AttachmentsMinAggregateOutputType | null
    _max: AttachmentsMaxAggregateOutputType | null
  }

  export type AttachmentsAvgAggregateOutputType = {
    id: number | null
    file_size: number | null
  }

  export type AttachmentsSumAggregateOutputType = {
    id: number | null
    file_size: bigint | null
  }

  export type AttachmentsMinAggregateOutputType = {
    id: number | null
    task_id: string | null
    file_name: string | null
    original_name: string | null
    file_path: string | null
    mime_type: string | null
    file_size: bigint | null
    uploaded_at: Date | null
  }

  export type AttachmentsMaxAggregateOutputType = {
    id: number | null
    task_id: string | null
    file_name: string | null
    original_name: string | null
    file_path: string | null
    mime_type: string | null
    file_size: bigint | null
    uploaded_at: Date | null
  }

  export type AttachmentsCountAggregateOutputType = {
    id: number
    task_id: number
    file_name: number
    original_name: number
    file_path: number
    mime_type: number
    file_size: number
    uploaded_at: number
    _all: number
  }


  export type AttachmentsAvgAggregateInputType = {
    id?: true
    file_size?: true
  }

  export type AttachmentsSumAggregateInputType = {
    id?: true
    file_size?: true
  }

  export type AttachmentsMinAggregateInputType = {
    id?: true
    task_id?: true
    file_name?: true
    original_name?: true
    file_path?: true
    mime_type?: true
    file_size?: true
    uploaded_at?: true
  }

  export type AttachmentsMaxAggregateInputType = {
    id?: true
    task_id?: true
    file_name?: true
    original_name?: true
    file_path?: true
    mime_type?: true
    file_size?: true
    uploaded_at?: true
  }

  export type AttachmentsCountAggregateInputType = {
    id?: true
    task_id?: true
    file_name?: true
    original_name?: true
    file_path?: true
    mime_type?: true
    file_size?: true
    uploaded_at?: true
    _all?: true
  }

  export type AttachmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attachments to aggregate.
     */
    where?: attachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attachments to fetch.
     */
    orderBy?: attachmentsOrderByWithRelationInput | attachmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: attachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned attachments
    **/
    _count?: true | AttachmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttachmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttachmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttachmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttachmentsMaxAggregateInputType
  }

  export type GetAttachmentsAggregateType<T extends AttachmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateAttachments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttachments[P]>
      : GetScalarType<T[P], AggregateAttachments[P]>
  }




  export type attachmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attachmentsWhereInput
    orderBy?: attachmentsOrderByWithAggregationInput | attachmentsOrderByWithAggregationInput[]
    by: AttachmentsScalarFieldEnum[] | AttachmentsScalarFieldEnum
    having?: attachmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttachmentsCountAggregateInputType | true
    _avg?: AttachmentsAvgAggregateInputType
    _sum?: AttachmentsSumAggregateInputType
    _min?: AttachmentsMinAggregateInputType
    _max?: AttachmentsMaxAggregateInputType
  }

  export type AttachmentsGroupByOutputType = {
    id: number
    task_id: string
    file_name: string
    original_name: string
    file_path: string
    mime_type: string | null
    file_size: bigint | null
    uploaded_at: Date | null
    _count: AttachmentsCountAggregateOutputType | null
    _avg: AttachmentsAvgAggregateOutputType | null
    _sum: AttachmentsSumAggregateOutputType | null
    _min: AttachmentsMinAggregateOutputType | null
    _max: AttachmentsMaxAggregateOutputType | null
  }

  type GetAttachmentsGroupByPayload<T extends attachmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttachmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttachmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttachmentsGroupByOutputType[P]>
            : GetScalarType<T[P], AttachmentsGroupByOutputType[P]>
        }
      >
    >


  export type attachmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_id?: boolean
    file_name?: boolean
    original_name?: boolean
    file_path?: boolean
    mime_type?: boolean
    file_size?: boolean
    uploaded_at?: boolean
    task?: boolean | taskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachments"]>

  export type attachmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_id?: boolean
    file_name?: boolean
    original_name?: boolean
    file_path?: boolean
    mime_type?: boolean
    file_size?: boolean
    uploaded_at?: boolean
    task?: boolean | taskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachments"]>

  export type attachmentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_id?: boolean
    file_name?: boolean
    original_name?: boolean
    file_path?: boolean
    mime_type?: boolean
    file_size?: boolean
    uploaded_at?: boolean
    task?: boolean | taskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachments"]>

  export type attachmentsSelectScalar = {
    id?: boolean
    task_id?: boolean
    file_name?: boolean
    original_name?: boolean
    file_path?: boolean
    mime_type?: boolean
    file_size?: boolean
    uploaded_at?: boolean
  }

  export type attachmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "task_id" | "file_name" | "original_name" | "file_path" | "mime_type" | "file_size" | "uploaded_at", ExtArgs["result"]["attachments"]>
  export type attachmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | taskDefaultArgs<ExtArgs>
  }
  export type attachmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | taskDefaultArgs<ExtArgs>
  }
  export type attachmentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | taskDefaultArgs<ExtArgs>
  }

  export type $attachmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "attachments"
    objects: {
      task: Prisma.$taskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      task_id: string
      file_name: string
      original_name: string
      file_path: string
      mime_type: string | null
      file_size: bigint | null
      uploaded_at: Date | null
    }, ExtArgs["result"]["attachments"]>
    composites: {}
  }

  type attachmentsGetPayload<S extends boolean | null | undefined | attachmentsDefaultArgs> = $Result.GetResult<Prisma.$attachmentsPayload, S>

  type attachmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<attachmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttachmentsCountAggregateInputType | true
    }

  export interface attachmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['attachments'], meta: { name: 'attachments' } }
    /**
     * Find zero or one Attachments that matches the filter.
     * @param {attachmentsFindUniqueArgs} args - Arguments to find a Attachments
     * @example
     * // Get one Attachments
     * const attachments = await prisma.attachments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends attachmentsFindUniqueArgs>(args: SelectSubset<T, attachmentsFindUniqueArgs<ExtArgs>>): Prisma__attachmentsClient<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attachments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {attachmentsFindUniqueOrThrowArgs} args - Arguments to find a Attachments
     * @example
     * // Get one Attachments
     * const attachments = await prisma.attachments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends attachmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, attachmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__attachmentsClient<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attachmentsFindFirstArgs} args - Arguments to find a Attachments
     * @example
     * // Get one Attachments
     * const attachments = await prisma.attachments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends attachmentsFindFirstArgs>(args?: SelectSubset<T, attachmentsFindFirstArgs<ExtArgs>>): Prisma__attachmentsClient<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attachmentsFindFirstOrThrowArgs} args - Arguments to find a Attachments
     * @example
     * // Get one Attachments
     * const attachments = await prisma.attachments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends attachmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, attachmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__attachmentsClient<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attachmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attachments
     * const attachments = await prisma.attachments.findMany()
     * 
     * // Get first 10 Attachments
     * const attachments = await prisma.attachments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attachmentsWithIdOnly = await prisma.attachments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends attachmentsFindManyArgs>(args?: SelectSubset<T, attachmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attachments.
     * @param {attachmentsCreateArgs} args - Arguments to create a Attachments.
     * @example
     * // Create one Attachments
     * const Attachments = await prisma.attachments.create({
     *   data: {
     *     // ... data to create a Attachments
     *   }
     * })
     * 
     */
    create<T extends attachmentsCreateArgs>(args: SelectSubset<T, attachmentsCreateArgs<ExtArgs>>): Prisma__attachmentsClient<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attachments.
     * @param {attachmentsCreateManyArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachments = await prisma.attachments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends attachmentsCreateManyArgs>(args?: SelectSubset<T, attachmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attachments and returns the data saved in the database.
     * @param {attachmentsCreateManyAndReturnArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachments = await prisma.attachments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attachments and only return the `id`
     * const attachmentsWithIdOnly = await prisma.attachments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends attachmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, attachmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attachments.
     * @param {attachmentsDeleteArgs} args - Arguments to delete one Attachments.
     * @example
     * // Delete one Attachments
     * const Attachments = await prisma.attachments.delete({
     *   where: {
     *     // ... filter to delete one Attachments
     *   }
     * })
     * 
     */
    delete<T extends attachmentsDeleteArgs>(args: SelectSubset<T, attachmentsDeleteArgs<ExtArgs>>): Prisma__attachmentsClient<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attachments.
     * @param {attachmentsUpdateArgs} args - Arguments to update one Attachments.
     * @example
     * // Update one Attachments
     * const attachments = await prisma.attachments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends attachmentsUpdateArgs>(args: SelectSubset<T, attachmentsUpdateArgs<ExtArgs>>): Prisma__attachmentsClient<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attachments.
     * @param {attachmentsDeleteManyArgs} args - Arguments to filter Attachments to delete.
     * @example
     * // Delete a few Attachments
     * const { count } = await prisma.attachments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends attachmentsDeleteManyArgs>(args?: SelectSubset<T, attachmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attachmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attachments
     * const attachments = await prisma.attachments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends attachmentsUpdateManyArgs>(args: SelectSubset<T, attachmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments and returns the data updated in the database.
     * @param {attachmentsUpdateManyAndReturnArgs} args - Arguments to update many Attachments.
     * @example
     * // Update many Attachments
     * const attachments = await prisma.attachments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attachments and only return the `id`
     * const attachmentsWithIdOnly = await prisma.attachments.updateManyAndReturn({
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
    updateManyAndReturn<T extends attachmentsUpdateManyAndReturnArgs>(args: SelectSubset<T, attachmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attachments.
     * @param {attachmentsUpsertArgs} args - Arguments to update or create a Attachments.
     * @example
     * // Update or create a Attachments
     * const attachments = await prisma.attachments.upsert({
     *   create: {
     *     // ... data to create a Attachments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attachments we want to update
     *   }
     * })
     */
    upsert<T extends attachmentsUpsertArgs>(args: SelectSubset<T, attachmentsUpsertArgs<ExtArgs>>): Prisma__attachmentsClient<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attachmentsCountArgs} args - Arguments to filter Attachments to count.
     * @example
     * // Count the number of Attachments
     * const count = await prisma.attachments.count({
     *   where: {
     *     // ... the filter for the Attachments we want to count
     *   }
     * })
    **/
    count<T extends attachmentsCountArgs>(
      args?: Subset<T, attachmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttachmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttachmentsAggregateArgs>(args: Subset<T, AttachmentsAggregateArgs>): Prisma.PrismaPromise<GetAttachmentsAggregateType<T>>

    /**
     * Group by Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attachmentsGroupByArgs} args - Group by arguments.
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
      T extends attachmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: attachmentsGroupByArgs['orderBy'] }
        : { orderBy?: attachmentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, attachmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttachmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the attachments model
   */
  readonly fields: attachmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for attachments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__attachmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends taskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, taskDefaultArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the attachments model
   */
  interface attachmentsFieldRefs {
    readonly id: FieldRef<"attachments", 'Int'>
    readonly task_id: FieldRef<"attachments", 'String'>
    readonly file_name: FieldRef<"attachments", 'String'>
    readonly original_name: FieldRef<"attachments", 'String'>
    readonly file_path: FieldRef<"attachments", 'String'>
    readonly mime_type: FieldRef<"attachments", 'String'>
    readonly file_size: FieldRef<"attachments", 'BigInt'>
    readonly uploaded_at: FieldRef<"attachments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * attachments findUnique
   */
  export type attachmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
    /**
     * Filter, which attachments to fetch.
     */
    where: attachmentsWhereUniqueInput
  }

  /**
   * attachments findUniqueOrThrow
   */
  export type attachmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
    /**
     * Filter, which attachments to fetch.
     */
    where: attachmentsWhereUniqueInput
  }

  /**
   * attachments findFirst
   */
  export type attachmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
    /**
     * Filter, which attachments to fetch.
     */
    where?: attachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attachments to fetch.
     */
    orderBy?: attachmentsOrderByWithRelationInput | attachmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attachments.
     */
    cursor?: attachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attachments.
     */
    distinct?: AttachmentsScalarFieldEnum | AttachmentsScalarFieldEnum[]
  }

  /**
   * attachments findFirstOrThrow
   */
  export type attachmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
    /**
     * Filter, which attachments to fetch.
     */
    where?: attachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attachments to fetch.
     */
    orderBy?: attachmentsOrderByWithRelationInput | attachmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attachments.
     */
    cursor?: attachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attachments.
     */
    distinct?: AttachmentsScalarFieldEnum | AttachmentsScalarFieldEnum[]
  }

  /**
   * attachments findMany
   */
  export type attachmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
    /**
     * Filter, which attachments to fetch.
     */
    where?: attachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attachments to fetch.
     */
    orderBy?: attachmentsOrderByWithRelationInput | attachmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing attachments.
     */
    cursor?: attachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attachments.
     */
    distinct?: AttachmentsScalarFieldEnum | AttachmentsScalarFieldEnum[]
  }

  /**
   * attachments create
   */
  export type attachmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a attachments.
     */
    data: XOR<attachmentsCreateInput, attachmentsUncheckedCreateInput>
  }

  /**
   * attachments createMany
   */
  export type attachmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many attachments.
     */
    data: attachmentsCreateManyInput | attachmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * attachments createManyAndReturn
   */
  export type attachmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * The data used to create many attachments.
     */
    data: attachmentsCreateManyInput | attachmentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * attachments update
   */
  export type attachmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a attachments.
     */
    data: XOR<attachmentsUpdateInput, attachmentsUncheckedUpdateInput>
    /**
     * Choose, which attachments to update.
     */
    where: attachmentsWhereUniqueInput
  }

  /**
   * attachments updateMany
   */
  export type attachmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update attachments.
     */
    data: XOR<attachmentsUpdateManyMutationInput, attachmentsUncheckedUpdateManyInput>
    /**
     * Filter which attachments to update
     */
    where?: attachmentsWhereInput
    /**
     * Limit how many attachments to update.
     */
    limit?: number
  }

  /**
   * attachments updateManyAndReturn
   */
  export type attachmentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * The data used to update attachments.
     */
    data: XOR<attachmentsUpdateManyMutationInput, attachmentsUncheckedUpdateManyInput>
    /**
     * Filter which attachments to update
     */
    where?: attachmentsWhereInput
    /**
     * Limit how many attachments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * attachments upsert
   */
  export type attachmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the attachments to update in case it exists.
     */
    where: attachmentsWhereUniqueInput
    /**
     * In case the attachments found by the `where` argument doesn't exist, create a new attachments with this data.
     */
    create: XOR<attachmentsCreateInput, attachmentsUncheckedCreateInput>
    /**
     * In case the attachments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<attachmentsUpdateInput, attachmentsUncheckedUpdateInput>
  }

  /**
   * attachments delete
   */
  export type attachmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
    /**
     * Filter which attachments to delete.
     */
    where: attachmentsWhereUniqueInput
  }

  /**
   * attachments deleteMany
   */
  export type attachmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attachments to delete
     */
    where?: attachmentsWhereInput
    /**
     * Limit how many attachments to delete.
     */
    limit?: number
  }

  /**
   * attachments without action
   */
  export type attachmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
  }


  /**
   * Model subtask
   */

  export type AggregateSubtask = {
    _count: SubtaskCountAggregateOutputType | null
    _avg: SubtaskAvgAggregateOutputType | null
    _sum: SubtaskSumAggregateOutputType | null
    _min: SubtaskMinAggregateOutputType | null
    _max: SubtaskMaxAggregateOutputType | null
  }

  export type SubtaskAvgAggregateOutputType = {
    id: number | null
  }

  export type SubtaskSumAggregateOutputType = {
    id: number | null
  }

  export type SubtaskMinAggregateOutputType = {
    id: number | null
    task_id: string | null
    title: string | null
    description: string | null
    status: $Enums.subtask_status | null
    created_at: Date | null
  }

  export type SubtaskMaxAggregateOutputType = {
    id: number | null
    task_id: string | null
    title: string | null
    description: string | null
    status: $Enums.subtask_status | null
    created_at: Date | null
  }

  export type SubtaskCountAggregateOutputType = {
    id: number
    task_id: number
    title: number
    description: number
    status: number
    created_at: number
    _all: number
  }


  export type SubtaskAvgAggregateInputType = {
    id?: true
  }

  export type SubtaskSumAggregateInputType = {
    id?: true
  }

  export type SubtaskMinAggregateInputType = {
    id?: true
    task_id?: true
    title?: true
    description?: true
    status?: true
    created_at?: true
  }

  export type SubtaskMaxAggregateInputType = {
    id?: true
    task_id?: true
    title?: true
    description?: true
    status?: true
    created_at?: true
  }

  export type SubtaskCountAggregateInputType = {
    id?: true
    task_id?: true
    title?: true
    description?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type SubtaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subtask to aggregate.
     */
    where?: subtaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subtasks to fetch.
     */
    orderBy?: subtaskOrderByWithRelationInput | subtaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: subtaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subtasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subtasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned subtasks
    **/
    _count?: true | SubtaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubtaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubtaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubtaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubtaskMaxAggregateInputType
  }

  export type GetSubtaskAggregateType<T extends SubtaskAggregateArgs> = {
        [P in keyof T & keyof AggregateSubtask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubtask[P]>
      : GetScalarType<T[P], AggregateSubtask[P]>
  }




  export type subtaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subtaskWhereInput
    orderBy?: subtaskOrderByWithAggregationInput | subtaskOrderByWithAggregationInput[]
    by: SubtaskScalarFieldEnum[] | SubtaskScalarFieldEnum
    having?: subtaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubtaskCountAggregateInputType | true
    _avg?: SubtaskAvgAggregateInputType
    _sum?: SubtaskSumAggregateInputType
    _min?: SubtaskMinAggregateInputType
    _max?: SubtaskMaxAggregateInputType
  }

  export type SubtaskGroupByOutputType = {
    id: number
    task_id: string
    title: string
    description: string | null
    status: $Enums.subtask_status | null
    created_at: Date | null
    _count: SubtaskCountAggregateOutputType | null
    _avg: SubtaskAvgAggregateOutputType | null
    _sum: SubtaskSumAggregateOutputType | null
    _min: SubtaskMinAggregateOutputType | null
    _max: SubtaskMaxAggregateOutputType | null
  }

  type GetSubtaskGroupByPayload<T extends subtaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubtaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubtaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubtaskGroupByOutputType[P]>
            : GetScalarType<T[P], SubtaskGroupByOutputType[P]>
        }
      >
    >


  export type subtaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    created_at?: boolean
    task?: boolean | taskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subtask"]>

  export type subtaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    created_at?: boolean
    task?: boolean | taskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subtask"]>

  export type subtaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    created_at?: boolean
    task?: boolean | taskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subtask"]>

  export type subtaskSelectScalar = {
    id?: boolean
    task_id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type subtaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "task_id" | "title" | "description" | "status" | "created_at", ExtArgs["result"]["subtask"]>
  export type subtaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | taskDefaultArgs<ExtArgs>
  }
  export type subtaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | taskDefaultArgs<ExtArgs>
  }
  export type subtaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | taskDefaultArgs<ExtArgs>
  }

  export type $subtaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "subtask"
    objects: {
      task: Prisma.$taskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      task_id: string
      title: string
      description: string | null
      status: $Enums.subtask_status | null
      created_at: Date | null
    }, ExtArgs["result"]["subtask"]>
    composites: {}
  }

  type subtaskGetPayload<S extends boolean | null | undefined | subtaskDefaultArgs> = $Result.GetResult<Prisma.$subtaskPayload, S>

  type subtaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<subtaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubtaskCountAggregateInputType | true
    }

  export interface subtaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subtask'], meta: { name: 'subtask' } }
    /**
     * Find zero or one Subtask that matches the filter.
     * @param {subtaskFindUniqueArgs} args - Arguments to find a Subtask
     * @example
     * // Get one Subtask
     * const subtask = await prisma.subtask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends subtaskFindUniqueArgs>(args: SelectSubset<T, subtaskFindUniqueArgs<ExtArgs>>): Prisma__subtaskClient<$Result.GetResult<Prisma.$subtaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subtask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {subtaskFindUniqueOrThrowArgs} args - Arguments to find a Subtask
     * @example
     * // Get one Subtask
     * const subtask = await prisma.subtask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends subtaskFindUniqueOrThrowArgs>(args: SelectSubset<T, subtaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__subtaskClient<$Result.GetResult<Prisma.$subtaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subtask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subtaskFindFirstArgs} args - Arguments to find a Subtask
     * @example
     * // Get one Subtask
     * const subtask = await prisma.subtask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends subtaskFindFirstArgs>(args?: SelectSubset<T, subtaskFindFirstArgs<ExtArgs>>): Prisma__subtaskClient<$Result.GetResult<Prisma.$subtaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subtask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subtaskFindFirstOrThrowArgs} args - Arguments to find a Subtask
     * @example
     * // Get one Subtask
     * const subtask = await prisma.subtask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends subtaskFindFirstOrThrowArgs>(args?: SelectSubset<T, subtaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__subtaskClient<$Result.GetResult<Prisma.$subtaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subtasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subtaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subtasks
     * const subtasks = await prisma.subtask.findMany()
     * 
     * // Get first 10 Subtasks
     * const subtasks = await prisma.subtask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subtaskWithIdOnly = await prisma.subtask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends subtaskFindManyArgs>(args?: SelectSubset<T, subtaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subtaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subtask.
     * @param {subtaskCreateArgs} args - Arguments to create a Subtask.
     * @example
     * // Create one Subtask
     * const Subtask = await prisma.subtask.create({
     *   data: {
     *     // ... data to create a Subtask
     *   }
     * })
     * 
     */
    create<T extends subtaskCreateArgs>(args: SelectSubset<T, subtaskCreateArgs<ExtArgs>>): Prisma__subtaskClient<$Result.GetResult<Prisma.$subtaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subtasks.
     * @param {subtaskCreateManyArgs} args - Arguments to create many Subtasks.
     * @example
     * // Create many Subtasks
     * const subtask = await prisma.subtask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends subtaskCreateManyArgs>(args?: SelectSubset<T, subtaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subtasks and returns the data saved in the database.
     * @param {subtaskCreateManyAndReturnArgs} args - Arguments to create many Subtasks.
     * @example
     * // Create many Subtasks
     * const subtask = await prisma.subtask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subtasks and only return the `id`
     * const subtaskWithIdOnly = await prisma.subtask.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends subtaskCreateManyAndReturnArgs>(args?: SelectSubset<T, subtaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subtaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subtask.
     * @param {subtaskDeleteArgs} args - Arguments to delete one Subtask.
     * @example
     * // Delete one Subtask
     * const Subtask = await prisma.subtask.delete({
     *   where: {
     *     // ... filter to delete one Subtask
     *   }
     * })
     * 
     */
    delete<T extends subtaskDeleteArgs>(args: SelectSubset<T, subtaskDeleteArgs<ExtArgs>>): Prisma__subtaskClient<$Result.GetResult<Prisma.$subtaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subtask.
     * @param {subtaskUpdateArgs} args - Arguments to update one Subtask.
     * @example
     * // Update one Subtask
     * const subtask = await prisma.subtask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends subtaskUpdateArgs>(args: SelectSubset<T, subtaskUpdateArgs<ExtArgs>>): Prisma__subtaskClient<$Result.GetResult<Prisma.$subtaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subtasks.
     * @param {subtaskDeleteManyArgs} args - Arguments to filter Subtasks to delete.
     * @example
     * // Delete a few Subtasks
     * const { count } = await prisma.subtask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends subtaskDeleteManyArgs>(args?: SelectSubset<T, subtaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subtasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subtaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subtasks
     * const subtask = await prisma.subtask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends subtaskUpdateManyArgs>(args: SelectSubset<T, subtaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subtasks and returns the data updated in the database.
     * @param {subtaskUpdateManyAndReturnArgs} args - Arguments to update many Subtasks.
     * @example
     * // Update many Subtasks
     * const subtask = await prisma.subtask.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subtasks and only return the `id`
     * const subtaskWithIdOnly = await prisma.subtask.updateManyAndReturn({
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
    updateManyAndReturn<T extends subtaskUpdateManyAndReturnArgs>(args: SelectSubset<T, subtaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subtaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subtask.
     * @param {subtaskUpsertArgs} args - Arguments to update or create a Subtask.
     * @example
     * // Update or create a Subtask
     * const subtask = await prisma.subtask.upsert({
     *   create: {
     *     // ... data to create a Subtask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subtask we want to update
     *   }
     * })
     */
    upsert<T extends subtaskUpsertArgs>(args: SelectSubset<T, subtaskUpsertArgs<ExtArgs>>): Prisma__subtaskClient<$Result.GetResult<Prisma.$subtaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subtasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subtaskCountArgs} args - Arguments to filter Subtasks to count.
     * @example
     * // Count the number of Subtasks
     * const count = await prisma.subtask.count({
     *   where: {
     *     // ... the filter for the Subtasks we want to count
     *   }
     * })
    **/
    count<T extends subtaskCountArgs>(
      args?: Subset<T, subtaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubtaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subtask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubtaskAggregateArgs>(args: Subset<T, SubtaskAggregateArgs>): Prisma.PrismaPromise<GetSubtaskAggregateType<T>>

    /**
     * Group by Subtask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subtaskGroupByArgs} args - Group by arguments.
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
      T extends subtaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subtaskGroupByArgs['orderBy'] }
        : { orderBy?: subtaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, subtaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubtaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the subtask model
   */
  readonly fields: subtaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subtask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subtaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends taskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, taskDefaultArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the subtask model
   */
  interface subtaskFieldRefs {
    readonly id: FieldRef<"subtask", 'Int'>
    readonly task_id: FieldRef<"subtask", 'String'>
    readonly title: FieldRef<"subtask", 'String'>
    readonly description: FieldRef<"subtask", 'String'>
    readonly status: FieldRef<"subtask", 'subtask_status'>
    readonly created_at: FieldRef<"subtask", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * subtask findUnique
   */
  export type subtaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtask
     */
    select?: subtaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subtask
     */
    omit?: subtaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subtaskInclude<ExtArgs> | null
    /**
     * Filter, which subtask to fetch.
     */
    where: subtaskWhereUniqueInput
  }

  /**
   * subtask findUniqueOrThrow
   */
  export type subtaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtask
     */
    select?: subtaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subtask
     */
    omit?: subtaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subtaskInclude<ExtArgs> | null
    /**
     * Filter, which subtask to fetch.
     */
    where: subtaskWhereUniqueInput
  }

  /**
   * subtask findFirst
   */
  export type subtaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtask
     */
    select?: subtaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subtask
     */
    omit?: subtaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subtaskInclude<ExtArgs> | null
    /**
     * Filter, which subtask to fetch.
     */
    where?: subtaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subtasks to fetch.
     */
    orderBy?: subtaskOrderByWithRelationInput | subtaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subtasks.
     */
    cursor?: subtaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subtasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subtasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subtasks.
     */
    distinct?: SubtaskScalarFieldEnum | SubtaskScalarFieldEnum[]
  }

  /**
   * subtask findFirstOrThrow
   */
  export type subtaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtask
     */
    select?: subtaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subtask
     */
    omit?: subtaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subtaskInclude<ExtArgs> | null
    /**
     * Filter, which subtask to fetch.
     */
    where?: subtaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subtasks to fetch.
     */
    orderBy?: subtaskOrderByWithRelationInput | subtaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subtasks.
     */
    cursor?: subtaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subtasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subtasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subtasks.
     */
    distinct?: SubtaskScalarFieldEnum | SubtaskScalarFieldEnum[]
  }

  /**
   * subtask findMany
   */
  export type subtaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtask
     */
    select?: subtaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subtask
     */
    omit?: subtaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subtaskInclude<ExtArgs> | null
    /**
     * Filter, which subtasks to fetch.
     */
    where?: subtaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subtasks to fetch.
     */
    orderBy?: subtaskOrderByWithRelationInput | subtaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing subtasks.
     */
    cursor?: subtaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subtasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subtasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subtasks.
     */
    distinct?: SubtaskScalarFieldEnum | SubtaskScalarFieldEnum[]
  }

  /**
   * subtask create
   */
  export type subtaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtask
     */
    select?: subtaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subtask
     */
    omit?: subtaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subtaskInclude<ExtArgs> | null
    /**
     * The data needed to create a subtask.
     */
    data: XOR<subtaskCreateInput, subtaskUncheckedCreateInput>
  }

  /**
   * subtask createMany
   */
  export type subtaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subtasks.
     */
    data: subtaskCreateManyInput | subtaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * subtask createManyAndReturn
   */
  export type subtaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtask
     */
    select?: subtaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subtask
     */
    omit?: subtaskOmit<ExtArgs> | null
    /**
     * The data used to create many subtasks.
     */
    data: subtaskCreateManyInput | subtaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subtaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * subtask update
   */
  export type subtaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtask
     */
    select?: subtaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subtask
     */
    omit?: subtaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subtaskInclude<ExtArgs> | null
    /**
     * The data needed to update a subtask.
     */
    data: XOR<subtaskUpdateInput, subtaskUncheckedUpdateInput>
    /**
     * Choose, which subtask to update.
     */
    where: subtaskWhereUniqueInput
  }

  /**
   * subtask updateMany
   */
  export type subtaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subtasks.
     */
    data: XOR<subtaskUpdateManyMutationInput, subtaskUncheckedUpdateManyInput>
    /**
     * Filter which subtasks to update
     */
    where?: subtaskWhereInput
    /**
     * Limit how many subtasks to update.
     */
    limit?: number
  }

  /**
   * subtask updateManyAndReturn
   */
  export type subtaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtask
     */
    select?: subtaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subtask
     */
    omit?: subtaskOmit<ExtArgs> | null
    /**
     * The data used to update subtasks.
     */
    data: XOR<subtaskUpdateManyMutationInput, subtaskUncheckedUpdateManyInput>
    /**
     * Filter which subtasks to update
     */
    where?: subtaskWhereInput
    /**
     * Limit how many subtasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subtaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * subtask upsert
   */
  export type subtaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtask
     */
    select?: subtaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subtask
     */
    omit?: subtaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subtaskInclude<ExtArgs> | null
    /**
     * The filter to search for the subtask to update in case it exists.
     */
    where: subtaskWhereUniqueInput
    /**
     * In case the subtask found by the `where` argument doesn't exist, create a new subtask with this data.
     */
    create: XOR<subtaskCreateInput, subtaskUncheckedCreateInput>
    /**
     * In case the subtask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subtaskUpdateInput, subtaskUncheckedUpdateInput>
  }

  /**
   * subtask delete
   */
  export type subtaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtask
     */
    select?: subtaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subtask
     */
    omit?: subtaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subtaskInclude<ExtArgs> | null
    /**
     * Filter which subtask to delete.
     */
    where: subtaskWhereUniqueInput
  }

  /**
   * subtask deleteMany
   */
  export type subtaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subtasks to delete
     */
    where?: subtaskWhereInput
    /**
     * Limit how many subtasks to delete.
     */
    limit?: number
  }

  /**
   * subtask without action
   */
  export type subtaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtask
     */
    select?: subtaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subtask
     */
    omit?: subtaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subtaskInclude<ExtArgs> | null
  }


  /**
   * Model task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    user_id: number | null
  }

  export type TaskSumAggregateOutputType = {
    user_id: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    user_id: number | null
    title: string | null
    description: string | null
    due_date: Date | null
    completed_date: Date | null
    priority: $Enums.task_priority | null
    status: $Enums.task_status | null
    created_at: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    user_id: number | null
    title: string | null
    description: string | null
    due_date: Date | null
    completed_date: Date | null
    priority: $Enums.task_priority | null
    status: $Enums.task_status | null
    created_at: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    user_id: number
    title: number
    description: number
    due_date: number
    completed_date: number
    priority: number
    status: number
    created_at: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    user_id?: true
  }

  export type TaskSumAggregateInputType = {
    user_id?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    description?: true
    due_date?: true
    completed_date?: true
    priority?: true
    status?: true
    created_at?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    description?: true
    due_date?: true
    completed_date?: true
    priority?: true
    status?: true
    created_at?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    description?: true
    due_date?: true
    completed_date?: true
    priority?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which task to aggregate.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type taskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taskWhereInput
    orderBy?: taskOrderByWithAggregationInput | taskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: taskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    user_id: number
    title: string
    description: string | null
    due_date: Date | null
    completed_date: Date | null
    priority: $Enums.task_priority | null
    status: $Enums.task_status | null
    created_at: Date | null
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends taskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type taskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    due_date?: boolean
    completed_date?: boolean
    priority?: boolean
    status?: boolean
    created_at?: boolean
    attachments?: boolean | task$attachmentsArgs<ExtArgs>
    subtask?: boolean | task$subtaskArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type taskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    due_date?: boolean
    completed_date?: boolean
    priority?: boolean
    status?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type taskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    due_date?: boolean
    completed_date?: boolean
    priority?: boolean
    status?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type taskSelectScalar = {
    id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    due_date?: boolean
    completed_date?: boolean
    priority?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type taskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "title" | "description" | "due_date" | "completed_date" | "priority" | "status" | "created_at", ExtArgs["result"]["task"]>
  export type taskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attachments?: boolean | task$attachmentsArgs<ExtArgs>
    subtask?: boolean | task$subtaskArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type taskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type taskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $taskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "task"
    objects: {
      attachments: Prisma.$attachmentsPayload<ExtArgs>[]
      subtask: Prisma.$subtaskPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: number
      title: string
      description: string | null
      due_date: Date | null
      completed_date: Date | null
      priority: $Enums.task_priority | null
      status: $Enums.task_status | null
      created_at: Date | null
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type taskGetPayload<S extends boolean | null | undefined | taskDefaultArgs> = $Result.GetResult<Prisma.$taskPayload, S>

  type taskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<taskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface taskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['task'], meta: { name: 'task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {taskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends taskFindUniqueArgs>(args: SelectSubset<T, taskFindUniqueArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {taskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends taskFindUniqueOrThrowArgs>(args: SelectSubset<T, taskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends taskFindFirstArgs>(args?: SelectSubset<T, taskFindFirstArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends taskFindFirstOrThrowArgs>(args?: SelectSubset<T, taskFindFirstOrThrowArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends taskFindManyArgs>(args?: SelectSubset<T, taskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {taskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends taskCreateArgs>(args: SelectSubset<T, taskCreateArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {taskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends taskCreateManyArgs>(args?: SelectSubset<T, taskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {taskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends taskCreateManyAndReturnArgs>(args?: SelectSubset<T, taskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {taskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends taskDeleteArgs>(args: SelectSubset<T, taskDeleteArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {taskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends taskUpdateArgs>(args: SelectSubset<T, taskUpdateArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {taskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends taskDeleteManyArgs>(args?: SelectSubset<T, taskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends taskUpdateManyArgs>(args: SelectSubset<T, taskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {taskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
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
    updateManyAndReturn<T extends taskUpdateManyAndReturnArgs>(args: SelectSubset<T, taskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {taskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends taskUpsertArgs>(args: SelectSubset<T, taskUpsertArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends taskCountArgs>(
      args?: Subset<T, taskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskGroupByArgs} args - Group by arguments.
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
      T extends taskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: taskGroupByArgs['orderBy'] }
        : { orderBy?: taskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, taskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the task model
   */
  readonly fields: taskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__taskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attachments<T extends task$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, task$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subtask<T extends task$subtaskArgs<ExtArgs> = {}>(args?: Subset<T, task$subtaskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subtaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the task model
   */
  interface taskFieldRefs {
    readonly id: FieldRef<"task", 'String'>
    readonly user_id: FieldRef<"task", 'Int'>
    readonly title: FieldRef<"task", 'String'>
    readonly description: FieldRef<"task", 'String'>
    readonly due_date: FieldRef<"task", 'DateTime'>
    readonly completed_date: FieldRef<"task", 'DateTime'>
    readonly priority: FieldRef<"task", 'task_priority'>
    readonly status: FieldRef<"task", 'task_status'>
    readonly created_at: FieldRef<"task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * task findUnique
   */
  export type taskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task findUniqueOrThrow
   */
  export type taskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task findFirst
   */
  export type taskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * task findFirstOrThrow
   */
  export type taskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * task findMany
   */
  export type taskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tasks.
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * task create
   */
  export type taskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * The data needed to create a task.
     */
    data: XOR<taskCreateInput, taskUncheckedCreateInput>
  }

  /**
   * task createMany
   */
  export type taskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tasks.
     */
    data: taskCreateManyInput | taskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * task createManyAndReturn
   */
  export type taskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * The data used to create many tasks.
     */
    data: taskCreateManyInput | taskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * task update
   */
  export type taskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * The data needed to update a task.
     */
    data: XOR<taskUpdateInput, taskUncheckedUpdateInput>
    /**
     * Choose, which task to update.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task updateMany
   */
  export type taskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tasks.
     */
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: taskWhereInput
    /**
     * Limit how many tasks to update.
     */
    limit?: number
  }

  /**
   * task updateManyAndReturn
   */
  export type taskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * The data used to update tasks.
     */
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: taskWhereInput
    /**
     * Limit how many tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * task upsert
   */
  export type taskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * The filter to search for the task to update in case it exists.
     */
    where: taskWhereUniqueInput
    /**
     * In case the task found by the `where` argument doesn't exist, create a new task with this data.
     */
    create: XOR<taskCreateInput, taskUncheckedCreateInput>
    /**
     * In case the task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<taskUpdateInput, taskUncheckedUpdateInput>
  }

  /**
   * task delete
   */
  export type taskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter which task to delete.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task deleteMany
   */
  export type taskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to delete
     */
    where?: taskWhereInput
    /**
     * Limit how many tasks to delete.
     */
    limit?: number
  }

  /**
   * task.attachments
   */
  export type task$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
    where?: attachmentsWhereInput
    orderBy?: attachmentsOrderByWithRelationInput | attachmentsOrderByWithRelationInput[]
    cursor?: attachmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttachmentsScalarFieldEnum | AttachmentsScalarFieldEnum[]
  }

  /**
   * task.subtask
   */
  export type task$subtaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtask
     */
    select?: subtaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subtask
     */
    omit?: subtaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subtaskInclude<ExtArgs> | null
    where?: subtaskWhereInput
    orderBy?: subtaskOrderByWithRelationInput | subtaskOrderByWithRelationInput[]
    cursor?: subtaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubtaskScalarFieldEnum | SubtaskScalarFieldEnum[]
  }

  /**
   * task without action
   */
  export type taskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    provider: $Enums.provider_type | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    provider: $Enums.provider_type | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    password: number
    provider: number
    created_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    provider?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    provider?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    provider?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    password: string
    provider: $Enums.provider_type | null
    created_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    provider?: boolean
    created_at?: boolean
    task?: boolean | users$taskArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    provider?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    provider?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    provider?: boolean
    created_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "provider" | "created_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | users$taskArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      task: Prisma.$taskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      provider: $Enums.provider_type | null
      created_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends users$taskArgs<ExtArgs> = {}>(args?: Subset<T, users$taskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly provider: FieldRef<"users", 'provider_type'>
    readonly created_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.task
   */
  export type users$taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    where?: taskWhereInput
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    cursor?: taskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const AttachmentsScalarFieldEnum: {
    id: 'id',
    task_id: 'task_id',
    file_name: 'file_name',
    original_name: 'original_name',
    file_path: 'file_path',
    mime_type: 'mime_type',
    file_size: 'file_size',
    uploaded_at: 'uploaded_at'
  };

  export type AttachmentsScalarFieldEnum = (typeof AttachmentsScalarFieldEnum)[keyof typeof AttachmentsScalarFieldEnum]


  export const SubtaskScalarFieldEnum: {
    id: 'id',
    task_id: 'task_id',
    title: 'title',
    description: 'description',
    status: 'status',
    created_at: 'created_at'
  };

  export type SubtaskScalarFieldEnum = (typeof SubtaskScalarFieldEnum)[keyof typeof SubtaskScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    description: 'description',
    due_date: 'due_date',
    completed_date: 'completed_date',
    priority: 'priority',
    status: 'status',
    created_at: 'created_at'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    provider: 'provider',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'subtask_status'
   */
  export type Enumsubtask_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'subtask_status'>
    


  /**
   * Reference to a field of type 'subtask_status[]'
   */
  export type ListEnumsubtask_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'subtask_status[]'>
    


  /**
   * Reference to a field of type 'task_priority'
   */
  export type Enumtask_priorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'task_priority'>
    


  /**
   * Reference to a field of type 'task_priority[]'
   */
  export type ListEnumtask_priorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'task_priority[]'>
    


  /**
   * Reference to a field of type 'task_status'
   */
  export type Enumtask_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'task_status'>
    


  /**
   * Reference to a field of type 'task_status[]'
   */
  export type ListEnumtask_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'task_status[]'>
    


  /**
   * Reference to a field of type 'provider_type'
   */
  export type Enumprovider_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'provider_type'>
    


  /**
   * Reference to a field of type 'provider_type[]'
   */
  export type ListEnumprovider_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'provider_type[]'>
    


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


  export type attachmentsWhereInput = {
    AND?: attachmentsWhereInput | attachmentsWhereInput[]
    OR?: attachmentsWhereInput[]
    NOT?: attachmentsWhereInput | attachmentsWhereInput[]
    id?: IntFilter<"attachments"> | number
    task_id?: UuidFilter<"attachments"> | string
    file_name?: StringFilter<"attachments"> | string
    original_name?: StringFilter<"attachments"> | string
    file_path?: StringFilter<"attachments"> | string
    mime_type?: StringNullableFilter<"attachments"> | string | null
    file_size?: BigIntNullableFilter<"attachments"> | bigint | number | null
    uploaded_at?: DateTimeNullableFilter<"attachments"> | Date | string | null
    task?: XOR<TaskScalarRelationFilter, taskWhereInput>
  }

  export type attachmentsOrderByWithRelationInput = {
    id?: SortOrder
    task_id?: SortOrder
    file_name?: SortOrder
    original_name?: SortOrder
    file_path?: SortOrder
    mime_type?: SortOrderInput | SortOrder
    file_size?: SortOrderInput | SortOrder
    uploaded_at?: SortOrderInput | SortOrder
    task?: taskOrderByWithRelationInput
  }

  export type attachmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: attachmentsWhereInput | attachmentsWhereInput[]
    OR?: attachmentsWhereInput[]
    NOT?: attachmentsWhereInput | attachmentsWhereInput[]
    task_id?: UuidFilter<"attachments"> | string
    file_name?: StringFilter<"attachments"> | string
    original_name?: StringFilter<"attachments"> | string
    file_path?: StringFilter<"attachments"> | string
    mime_type?: StringNullableFilter<"attachments"> | string | null
    file_size?: BigIntNullableFilter<"attachments"> | bigint | number | null
    uploaded_at?: DateTimeNullableFilter<"attachments"> | Date | string | null
    task?: XOR<TaskScalarRelationFilter, taskWhereInput>
  }, "id">

  export type attachmentsOrderByWithAggregationInput = {
    id?: SortOrder
    task_id?: SortOrder
    file_name?: SortOrder
    original_name?: SortOrder
    file_path?: SortOrder
    mime_type?: SortOrderInput | SortOrder
    file_size?: SortOrderInput | SortOrder
    uploaded_at?: SortOrderInput | SortOrder
    _count?: attachmentsCountOrderByAggregateInput
    _avg?: attachmentsAvgOrderByAggregateInput
    _max?: attachmentsMaxOrderByAggregateInput
    _min?: attachmentsMinOrderByAggregateInput
    _sum?: attachmentsSumOrderByAggregateInput
  }

  export type attachmentsScalarWhereWithAggregatesInput = {
    AND?: attachmentsScalarWhereWithAggregatesInput | attachmentsScalarWhereWithAggregatesInput[]
    OR?: attachmentsScalarWhereWithAggregatesInput[]
    NOT?: attachmentsScalarWhereWithAggregatesInput | attachmentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"attachments"> | number
    task_id?: UuidWithAggregatesFilter<"attachments"> | string
    file_name?: StringWithAggregatesFilter<"attachments"> | string
    original_name?: StringWithAggregatesFilter<"attachments"> | string
    file_path?: StringWithAggregatesFilter<"attachments"> | string
    mime_type?: StringNullableWithAggregatesFilter<"attachments"> | string | null
    file_size?: BigIntNullableWithAggregatesFilter<"attachments"> | bigint | number | null
    uploaded_at?: DateTimeNullableWithAggregatesFilter<"attachments"> | Date | string | null
  }

  export type subtaskWhereInput = {
    AND?: subtaskWhereInput | subtaskWhereInput[]
    OR?: subtaskWhereInput[]
    NOT?: subtaskWhereInput | subtaskWhereInput[]
    id?: IntFilter<"subtask"> | number
    task_id?: UuidFilter<"subtask"> | string
    title?: StringFilter<"subtask"> | string
    description?: StringNullableFilter<"subtask"> | string | null
    status?: Enumsubtask_statusNullableFilter<"subtask"> | $Enums.subtask_status | null
    created_at?: DateTimeNullableFilter<"subtask"> | Date | string | null
    task?: XOR<TaskScalarRelationFilter, taskWhereInput>
  }

  export type subtaskOrderByWithRelationInput = {
    id?: SortOrder
    task_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    task?: taskOrderByWithRelationInput
  }

  export type subtaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: subtaskWhereInput | subtaskWhereInput[]
    OR?: subtaskWhereInput[]
    NOT?: subtaskWhereInput | subtaskWhereInput[]
    task_id?: UuidFilter<"subtask"> | string
    title?: StringFilter<"subtask"> | string
    description?: StringNullableFilter<"subtask"> | string | null
    status?: Enumsubtask_statusNullableFilter<"subtask"> | $Enums.subtask_status | null
    created_at?: DateTimeNullableFilter<"subtask"> | Date | string | null
    task?: XOR<TaskScalarRelationFilter, taskWhereInput>
  }, "id">

  export type subtaskOrderByWithAggregationInput = {
    id?: SortOrder
    task_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: subtaskCountOrderByAggregateInput
    _avg?: subtaskAvgOrderByAggregateInput
    _max?: subtaskMaxOrderByAggregateInput
    _min?: subtaskMinOrderByAggregateInput
    _sum?: subtaskSumOrderByAggregateInput
  }

  export type subtaskScalarWhereWithAggregatesInput = {
    AND?: subtaskScalarWhereWithAggregatesInput | subtaskScalarWhereWithAggregatesInput[]
    OR?: subtaskScalarWhereWithAggregatesInput[]
    NOT?: subtaskScalarWhereWithAggregatesInput | subtaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"subtask"> | number
    task_id?: UuidWithAggregatesFilter<"subtask"> | string
    title?: StringWithAggregatesFilter<"subtask"> | string
    description?: StringNullableWithAggregatesFilter<"subtask"> | string | null
    status?: Enumsubtask_statusNullableWithAggregatesFilter<"subtask"> | $Enums.subtask_status | null
    created_at?: DateTimeNullableWithAggregatesFilter<"subtask"> | Date | string | null
  }

  export type taskWhereInput = {
    AND?: taskWhereInput | taskWhereInput[]
    OR?: taskWhereInput[]
    NOT?: taskWhereInput | taskWhereInput[]
    id?: UuidFilter<"task"> | string
    user_id?: IntFilter<"task"> | number
    title?: StringFilter<"task"> | string
    description?: StringNullableFilter<"task"> | string | null
    due_date?: DateTimeNullableFilter<"task"> | Date | string | null
    completed_date?: DateTimeNullableFilter<"task"> | Date | string | null
    priority?: Enumtask_priorityNullableFilter<"task"> | $Enums.task_priority | null
    status?: Enumtask_statusNullableFilter<"task"> | $Enums.task_status | null
    created_at?: DateTimeNullableFilter<"task"> | Date | string | null
    attachments?: AttachmentsListRelationFilter
    subtask?: SubtaskListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type taskOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    due_date?: SortOrderInput | SortOrder
    completed_date?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    attachments?: attachmentsOrderByRelationAggregateInput
    subtask?: subtaskOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type taskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: taskWhereInput | taskWhereInput[]
    OR?: taskWhereInput[]
    NOT?: taskWhereInput | taskWhereInput[]
    user_id?: IntFilter<"task"> | number
    title?: StringFilter<"task"> | string
    description?: StringNullableFilter<"task"> | string | null
    due_date?: DateTimeNullableFilter<"task"> | Date | string | null
    completed_date?: DateTimeNullableFilter<"task"> | Date | string | null
    priority?: Enumtask_priorityNullableFilter<"task"> | $Enums.task_priority | null
    status?: Enumtask_statusNullableFilter<"task"> | $Enums.task_status | null
    created_at?: DateTimeNullableFilter<"task"> | Date | string | null
    attachments?: AttachmentsListRelationFilter
    subtask?: SubtaskListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type taskOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    due_date?: SortOrderInput | SortOrder
    completed_date?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: taskCountOrderByAggregateInput
    _avg?: taskAvgOrderByAggregateInput
    _max?: taskMaxOrderByAggregateInput
    _min?: taskMinOrderByAggregateInput
    _sum?: taskSumOrderByAggregateInput
  }

  export type taskScalarWhereWithAggregatesInput = {
    AND?: taskScalarWhereWithAggregatesInput | taskScalarWhereWithAggregatesInput[]
    OR?: taskScalarWhereWithAggregatesInput[]
    NOT?: taskScalarWhereWithAggregatesInput | taskScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"task"> | string
    user_id?: IntWithAggregatesFilter<"task"> | number
    title?: StringWithAggregatesFilter<"task"> | string
    description?: StringNullableWithAggregatesFilter<"task"> | string | null
    due_date?: DateTimeNullableWithAggregatesFilter<"task"> | Date | string | null
    completed_date?: DateTimeNullableWithAggregatesFilter<"task"> | Date | string | null
    priority?: Enumtask_priorityNullableWithAggregatesFilter<"task"> | $Enums.task_priority | null
    status?: Enumtask_statusNullableWithAggregatesFilter<"task"> | $Enums.task_status | null
    created_at?: DateTimeNullableWithAggregatesFilter<"task"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    provider?: Enumprovider_typeNullableFilter<"users"> | $Enums.provider_type | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    task?: TaskListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    provider?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    task?: taskOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    provider?: Enumprovider_typeNullableFilter<"users"> | $Enums.provider_type | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    task?: TaskListRelationFilter
  }, "id" | "username">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    provider?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    provider?: Enumprovider_typeNullableWithAggregatesFilter<"users"> | $Enums.provider_type | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type attachmentsCreateInput = {
    file_name: string
    original_name: string
    file_path: string
    mime_type?: string | null
    file_size?: bigint | number | null
    uploaded_at?: Date | string | null
    task: taskCreateNestedOneWithoutAttachmentsInput
  }

  export type attachmentsUncheckedCreateInput = {
    id?: number
    task_id: string
    file_name: string
    original_name: string
    file_path: string
    mime_type?: string | null
    file_size?: bigint | number | null
    uploaded_at?: Date | string | null
  }

  export type attachmentsUpdateInput = {
    file_name?: StringFieldUpdateOperationsInput | string
    original_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    mime_type?: NullableStringFieldUpdateOperationsInput | string | null
    file_size?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    uploaded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task?: taskUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type attachmentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_id?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    original_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    mime_type?: NullableStringFieldUpdateOperationsInput | string | null
    file_size?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    uploaded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attachmentsCreateManyInput = {
    id?: number
    task_id: string
    file_name: string
    original_name: string
    file_path: string
    mime_type?: string | null
    file_size?: bigint | number | null
    uploaded_at?: Date | string | null
  }

  export type attachmentsUpdateManyMutationInput = {
    file_name?: StringFieldUpdateOperationsInput | string
    original_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    mime_type?: NullableStringFieldUpdateOperationsInput | string | null
    file_size?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    uploaded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attachmentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_id?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    original_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    mime_type?: NullableStringFieldUpdateOperationsInput | string | null
    file_size?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    uploaded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subtaskCreateInput = {
    title: string
    description?: string | null
    status?: $Enums.subtask_status | null
    created_at?: Date | string | null
    task: taskCreateNestedOneWithoutSubtaskInput
  }

  export type subtaskUncheckedCreateInput = {
    id?: number
    task_id: string
    title: string
    description?: string | null
    status?: $Enums.subtask_status | null
    created_at?: Date | string | null
  }

  export type subtaskUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumsubtask_statusFieldUpdateOperationsInput | $Enums.subtask_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task?: taskUpdateOneRequiredWithoutSubtaskNestedInput
  }

  export type subtaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumsubtask_statusFieldUpdateOperationsInput | $Enums.subtask_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subtaskCreateManyInput = {
    id?: number
    task_id: string
    title: string
    description?: string | null
    status?: $Enums.subtask_status | null
    created_at?: Date | string | null
  }

  export type subtaskUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumsubtask_statusFieldUpdateOperationsInput | $Enums.subtask_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subtaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumsubtask_statusFieldUpdateOperationsInput | $Enums.subtask_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type taskCreateInput = {
    id?: string
    title: string
    description?: string | null
    due_date?: Date | string | null
    completed_date?: Date | string | null
    priority?: $Enums.task_priority | null
    status?: $Enums.task_status | null
    created_at?: Date | string | null
    attachments?: attachmentsCreateNestedManyWithoutTaskInput
    subtask?: subtaskCreateNestedManyWithoutTaskInput
    users: usersCreateNestedOneWithoutTaskInput
  }

  export type taskUncheckedCreateInput = {
    id?: string
    user_id: number
    title: string
    description?: string | null
    due_date?: Date | string | null
    completed_date?: Date | string | null
    priority?: $Enums.task_priority | null
    status?: $Enums.task_status | null
    created_at?: Date | string | null
    attachments?: attachmentsUncheckedCreateNestedManyWithoutTaskInput
    subtask?: subtaskUncheckedCreateNestedManyWithoutTaskInput
  }

  export type taskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: NullableEnumtask_priorityFieldUpdateOperationsInput | $Enums.task_priority | null
    status?: NullableEnumtask_statusFieldUpdateOperationsInput | $Enums.task_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: attachmentsUpdateManyWithoutTaskNestedInput
    subtask?: subtaskUpdateManyWithoutTaskNestedInput
    users?: usersUpdateOneRequiredWithoutTaskNestedInput
  }

  export type taskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: NullableEnumtask_priorityFieldUpdateOperationsInput | $Enums.task_priority | null
    status?: NullableEnumtask_statusFieldUpdateOperationsInput | $Enums.task_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: attachmentsUncheckedUpdateManyWithoutTaskNestedInput
    subtask?: subtaskUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type taskCreateManyInput = {
    id?: string
    user_id: number
    title: string
    description?: string | null
    due_date?: Date | string | null
    completed_date?: Date | string | null
    priority?: $Enums.task_priority | null
    status?: $Enums.task_status | null
    created_at?: Date | string | null
  }

  export type taskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: NullableEnumtask_priorityFieldUpdateOperationsInput | $Enums.task_priority | null
    status?: NullableEnumtask_statusFieldUpdateOperationsInput | $Enums.task_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type taskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: NullableEnumtask_priorityFieldUpdateOperationsInput | $Enums.task_priority | null
    status?: NullableEnumtask_statusFieldUpdateOperationsInput | $Enums.task_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    username: string
    password: string
    provider?: $Enums.provider_type | null
    created_at?: Date | string | null
    task?: taskCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    provider?: $Enums.provider_type | null
    created_at?: Date | string | null
    task?: taskUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    provider?: NullableEnumprovider_typeFieldUpdateOperationsInput | $Enums.provider_type | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task?: taskUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    provider?: NullableEnumprovider_typeFieldUpdateOperationsInput | $Enums.provider_type | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task?: taskUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    username: string
    password: string
    provider?: $Enums.provider_type | null
    created_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    provider?: NullableEnumprovider_typeFieldUpdateOperationsInput | $Enums.provider_type | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    provider?: NullableEnumprovider_typeFieldUpdateOperationsInput | $Enums.provider_type | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TaskScalarRelationFilter = {
    is?: taskWhereInput
    isNot?: taskWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type attachmentsCountOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    file_name?: SortOrder
    original_name?: SortOrder
    file_path?: SortOrder
    mime_type?: SortOrder
    file_size?: SortOrder
    uploaded_at?: SortOrder
  }

  export type attachmentsAvgOrderByAggregateInput = {
    id?: SortOrder
    file_size?: SortOrder
  }

  export type attachmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    file_name?: SortOrder
    original_name?: SortOrder
    file_path?: SortOrder
    mime_type?: SortOrder
    file_size?: SortOrder
    uploaded_at?: SortOrder
  }

  export type attachmentsMinOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    file_name?: SortOrder
    original_name?: SortOrder
    file_path?: SortOrder
    mime_type?: SortOrder
    file_size?: SortOrder
    uploaded_at?: SortOrder
  }

  export type attachmentsSumOrderByAggregateInput = {
    id?: SortOrder
    file_size?: SortOrder
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

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Enumsubtask_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.subtask_status | Enumsubtask_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.subtask_status[] | ListEnumsubtask_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.subtask_status[] | ListEnumsubtask_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumsubtask_statusNullableFilter<$PrismaModel> | $Enums.subtask_status | null
  }

  export type subtaskCountOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type subtaskAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type subtaskMaxOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type subtaskMinOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type subtaskSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumsubtask_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.subtask_status | Enumsubtask_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.subtask_status[] | ListEnumsubtask_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.subtask_status[] | ListEnumsubtask_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumsubtask_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.subtask_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumsubtask_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumsubtask_statusNullableFilter<$PrismaModel>
  }

  export type Enumtask_priorityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.task_priority | Enumtask_priorityFieldRefInput<$PrismaModel> | null
    in?: $Enums.task_priority[] | ListEnumtask_priorityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.task_priority[] | ListEnumtask_priorityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumtask_priorityNullableFilter<$PrismaModel> | $Enums.task_priority | null
  }

  export type Enumtask_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.task_status | Enumtask_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.task_status[] | ListEnumtask_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.task_status[] | ListEnumtask_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumtask_statusNullableFilter<$PrismaModel> | $Enums.task_status | null
  }

  export type AttachmentsListRelationFilter = {
    every?: attachmentsWhereInput
    some?: attachmentsWhereInput
    none?: attachmentsWhereInput
  }

  export type SubtaskListRelationFilter = {
    every?: subtaskWhereInput
    some?: subtaskWhereInput
    none?: subtaskWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type attachmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type subtaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type taskCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    due_date?: SortOrder
    completed_date?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type taskAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type taskMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    due_date?: SortOrder
    completed_date?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type taskMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    due_date?: SortOrder
    completed_date?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type taskSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type Enumtask_priorityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.task_priority | Enumtask_priorityFieldRefInput<$PrismaModel> | null
    in?: $Enums.task_priority[] | ListEnumtask_priorityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.task_priority[] | ListEnumtask_priorityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumtask_priorityNullableWithAggregatesFilter<$PrismaModel> | $Enums.task_priority | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumtask_priorityNullableFilter<$PrismaModel>
    _max?: NestedEnumtask_priorityNullableFilter<$PrismaModel>
  }

  export type Enumtask_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.task_status | Enumtask_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.task_status[] | ListEnumtask_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.task_status[] | ListEnumtask_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumtask_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.task_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumtask_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumtask_statusNullableFilter<$PrismaModel>
  }

  export type Enumprovider_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.provider_type | Enumprovider_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.provider_type[] | ListEnumprovider_typeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.provider_type[] | ListEnumprovider_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumprovider_typeNullableFilter<$PrismaModel> | $Enums.provider_type | null
  }

  export type TaskListRelationFilter = {
    every?: taskWhereInput
    some?: taskWhereInput
    none?: taskWhereInput
  }

  export type taskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    provider?: SortOrder
    created_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    provider?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    provider?: SortOrder
    created_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumprovider_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.provider_type | Enumprovider_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.provider_type[] | ListEnumprovider_typeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.provider_type[] | ListEnumprovider_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumprovider_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.provider_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumprovider_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumprovider_typeNullableFilter<$PrismaModel>
  }

  export type taskCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<taskCreateWithoutAttachmentsInput, taskUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: taskCreateOrConnectWithoutAttachmentsInput
    connect?: taskWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type taskUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<taskCreateWithoutAttachmentsInput, taskUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: taskCreateOrConnectWithoutAttachmentsInput
    upsert?: taskUpsertWithoutAttachmentsInput
    connect?: taskWhereUniqueInput
    update?: XOR<XOR<taskUpdateToOneWithWhereWithoutAttachmentsInput, taskUpdateWithoutAttachmentsInput>, taskUncheckedUpdateWithoutAttachmentsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type taskCreateNestedOneWithoutSubtaskInput = {
    create?: XOR<taskCreateWithoutSubtaskInput, taskUncheckedCreateWithoutSubtaskInput>
    connectOrCreate?: taskCreateOrConnectWithoutSubtaskInput
    connect?: taskWhereUniqueInput
  }

  export type NullableEnumsubtask_statusFieldUpdateOperationsInput = {
    set?: $Enums.subtask_status | null
  }

  export type taskUpdateOneRequiredWithoutSubtaskNestedInput = {
    create?: XOR<taskCreateWithoutSubtaskInput, taskUncheckedCreateWithoutSubtaskInput>
    connectOrCreate?: taskCreateOrConnectWithoutSubtaskInput
    upsert?: taskUpsertWithoutSubtaskInput
    connect?: taskWhereUniqueInput
    update?: XOR<XOR<taskUpdateToOneWithWhereWithoutSubtaskInput, taskUpdateWithoutSubtaskInput>, taskUncheckedUpdateWithoutSubtaskInput>
  }

  export type attachmentsCreateNestedManyWithoutTaskInput = {
    create?: XOR<attachmentsCreateWithoutTaskInput, attachmentsUncheckedCreateWithoutTaskInput> | attachmentsCreateWithoutTaskInput[] | attachmentsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: attachmentsCreateOrConnectWithoutTaskInput | attachmentsCreateOrConnectWithoutTaskInput[]
    createMany?: attachmentsCreateManyTaskInputEnvelope
    connect?: attachmentsWhereUniqueInput | attachmentsWhereUniqueInput[]
  }

  export type subtaskCreateNestedManyWithoutTaskInput = {
    create?: XOR<subtaskCreateWithoutTaskInput, subtaskUncheckedCreateWithoutTaskInput> | subtaskCreateWithoutTaskInput[] | subtaskUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: subtaskCreateOrConnectWithoutTaskInput | subtaskCreateOrConnectWithoutTaskInput[]
    createMany?: subtaskCreateManyTaskInputEnvelope
    connect?: subtaskWhereUniqueInput | subtaskWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutTaskInput = {
    create?: XOR<usersCreateWithoutTaskInput, usersUncheckedCreateWithoutTaskInput>
    connectOrCreate?: usersCreateOrConnectWithoutTaskInput
    connect?: usersWhereUniqueInput
  }

  export type attachmentsUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<attachmentsCreateWithoutTaskInput, attachmentsUncheckedCreateWithoutTaskInput> | attachmentsCreateWithoutTaskInput[] | attachmentsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: attachmentsCreateOrConnectWithoutTaskInput | attachmentsCreateOrConnectWithoutTaskInput[]
    createMany?: attachmentsCreateManyTaskInputEnvelope
    connect?: attachmentsWhereUniqueInput | attachmentsWhereUniqueInput[]
  }

  export type subtaskUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<subtaskCreateWithoutTaskInput, subtaskUncheckedCreateWithoutTaskInput> | subtaskCreateWithoutTaskInput[] | subtaskUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: subtaskCreateOrConnectWithoutTaskInput | subtaskCreateOrConnectWithoutTaskInput[]
    createMany?: subtaskCreateManyTaskInputEnvelope
    connect?: subtaskWhereUniqueInput | subtaskWhereUniqueInput[]
  }

  export type NullableEnumtask_priorityFieldUpdateOperationsInput = {
    set?: $Enums.task_priority | null
  }

  export type NullableEnumtask_statusFieldUpdateOperationsInput = {
    set?: $Enums.task_status | null
  }

  export type attachmentsUpdateManyWithoutTaskNestedInput = {
    create?: XOR<attachmentsCreateWithoutTaskInput, attachmentsUncheckedCreateWithoutTaskInput> | attachmentsCreateWithoutTaskInput[] | attachmentsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: attachmentsCreateOrConnectWithoutTaskInput | attachmentsCreateOrConnectWithoutTaskInput[]
    upsert?: attachmentsUpsertWithWhereUniqueWithoutTaskInput | attachmentsUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: attachmentsCreateManyTaskInputEnvelope
    set?: attachmentsWhereUniqueInput | attachmentsWhereUniqueInput[]
    disconnect?: attachmentsWhereUniqueInput | attachmentsWhereUniqueInput[]
    delete?: attachmentsWhereUniqueInput | attachmentsWhereUniqueInput[]
    connect?: attachmentsWhereUniqueInput | attachmentsWhereUniqueInput[]
    update?: attachmentsUpdateWithWhereUniqueWithoutTaskInput | attachmentsUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: attachmentsUpdateManyWithWhereWithoutTaskInput | attachmentsUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: attachmentsScalarWhereInput | attachmentsScalarWhereInput[]
  }

  export type subtaskUpdateManyWithoutTaskNestedInput = {
    create?: XOR<subtaskCreateWithoutTaskInput, subtaskUncheckedCreateWithoutTaskInput> | subtaskCreateWithoutTaskInput[] | subtaskUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: subtaskCreateOrConnectWithoutTaskInput | subtaskCreateOrConnectWithoutTaskInput[]
    upsert?: subtaskUpsertWithWhereUniqueWithoutTaskInput | subtaskUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: subtaskCreateManyTaskInputEnvelope
    set?: subtaskWhereUniqueInput | subtaskWhereUniqueInput[]
    disconnect?: subtaskWhereUniqueInput | subtaskWhereUniqueInput[]
    delete?: subtaskWhereUniqueInput | subtaskWhereUniqueInput[]
    connect?: subtaskWhereUniqueInput | subtaskWhereUniqueInput[]
    update?: subtaskUpdateWithWhereUniqueWithoutTaskInput | subtaskUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: subtaskUpdateManyWithWhereWithoutTaskInput | subtaskUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: subtaskScalarWhereInput | subtaskScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutTaskNestedInput = {
    create?: XOR<usersCreateWithoutTaskInput, usersUncheckedCreateWithoutTaskInput>
    connectOrCreate?: usersCreateOrConnectWithoutTaskInput
    upsert?: usersUpsertWithoutTaskInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTaskInput, usersUpdateWithoutTaskInput>, usersUncheckedUpdateWithoutTaskInput>
  }

  export type attachmentsUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<attachmentsCreateWithoutTaskInput, attachmentsUncheckedCreateWithoutTaskInput> | attachmentsCreateWithoutTaskInput[] | attachmentsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: attachmentsCreateOrConnectWithoutTaskInput | attachmentsCreateOrConnectWithoutTaskInput[]
    upsert?: attachmentsUpsertWithWhereUniqueWithoutTaskInput | attachmentsUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: attachmentsCreateManyTaskInputEnvelope
    set?: attachmentsWhereUniqueInput | attachmentsWhereUniqueInput[]
    disconnect?: attachmentsWhereUniqueInput | attachmentsWhereUniqueInput[]
    delete?: attachmentsWhereUniqueInput | attachmentsWhereUniqueInput[]
    connect?: attachmentsWhereUniqueInput | attachmentsWhereUniqueInput[]
    update?: attachmentsUpdateWithWhereUniqueWithoutTaskInput | attachmentsUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: attachmentsUpdateManyWithWhereWithoutTaskInput | attachmentsUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: attachmentsScalarWhereInput | attachmentsScalarWhereInput[]
  }

  export type subtaskUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<subtaskCreateWithoutTaskInput, subtaskUncheckedCreateWithoutTaskInput> | subtaskCreateWithoutTaskInput[] | subtaskUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: subtaskCreateOrConnectWithoutTaskInput | subtaskCreateOrConnectWithoutTaskInput[]
    upsert?: subtaskUpsertWithWhereUniqueWithoutTaskInput | subtaskUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: subtaskCreateManyTaskInputEnvelope
    set?: subtaskWhereUniqueInput | subtaskWhereUniqueInput[]
    disconnect?: subtaskWhereUniqueInput | subtaskWhereUniqueInput[]
    delete?: subtaskWhereUniqueInput | subtaskWhereUniqueInput[]
    connect?: subtaskWhereUniqueInput | subtaskWhereUniqueInput[]
    update?: subtaskUpdateWithWhereUniqueWithoutTaskInput | subtaskUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: subtaskUpdateManyWithWhereWithoutTaskInput | subtaskUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: subtaskScalarWhereInput | subtaskScalarWhereInput[]
  }

  export type taskCreateNestedManyWithoutUsersInput = {
    create?: XOR<taskCreateWithoutUsersInput, taskUncheckedCreateWithoutUsersInput> | taskCreateWithoutUsersInput[] | taskUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: taskCreateOrConnectWithoutUsersInput | taskCreateOrConnectWithoutUsersInput[]
    createMany?: taskCreateManyUsersInputEnvelope
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
  }

  export type taskUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<taskCreateWithoutUsersInput, taskUncheckedCreateWithoutUsersInput> | taskCreateWithoutUsersInput[] | taskUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: taskCreateOrConnectWithoutUsersInput | taskCreateOrConnectWithoutUsersInput[]
    createMany?: taskCreateManyUsersInputEnvelope
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
  }

  export type NullableEnumprovider_typeFieldUpdateOperationsInput = {
    set?: $Enums.provider_type | null
  }

  export type taskUpdateManyWithoutUsersNestedInput = {
    create?: XOR<taskCreateWithoutUsersInput, taskUncheckedCreateWithoutUsersInput> | taskCreateWithoutUsersInput[] | taskUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: taskCreateOrConnectWithoutUsersInput | taskCreateOrConnectWithoutUsersInput[]
    upsert?: taskUpsertWithWhereUniqueWithoutUsersInput | taskUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: taskCreateManyUsersInputEnvelope
    set?: taskWhereUniqueInput | taskWhereUniqueInput[]
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[]
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    update?: taskUpdateWithWhereUniqueWithoutUsersInput | taskUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: taskUpdateManyWithWhereWithoutUsersInput | taskUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[]
  }

  export type taskUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<taskCreateWithoutUsersInput, taskUncheckedCreateWithoutUsersInput> | taskCreateWithoutUsersInput[] | taskUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: taskCreateOrConnectWithoutUsersInput | taskCreateOrConnectWithoutUsersInput[]
    upsert?: taskUpsertWithWhereUniqueWithoutUsersInput | taskUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: taskCreateManyUsersInputEnvelope
    set?: taskWhereUniqueInput | taskWhereUniqueInput[]
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[]
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    update?: taskUpdateWithWhereUniqueWithoutUsersInput | taskUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: taskUpdateManyWithWhereWithoutUsersInput | taskUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[]
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

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumsubtask_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.subtask_status | Enumsubtask_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.subtask_status[] | ListEnumsubtask_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.subtask_status[] | ListEnumsubtask_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumsubtask_statusNullableFilter<$PrismaModel> | $Enums.subtask_status | null
  }

  export type NestedEnumsubtask_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.subtask_status | Enumsubtask_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.subtask_status[] | ListEnumsubtask_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.subtask_status[] | ListEnumsubtask_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumsubtask_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.subtask_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumsubtask_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumsubtask_statusNullableFilter<$PrismaModel>
  }

  export type NestedEnumtask_priorityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.task_priority | Enumtask_priorityFieldRefInput<$PrismaModel> | null
    in?: $Enums.task_priority[] | ListEnumtask_priorityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.task_priority[] | ListEnumtask_priorityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumtask_priorityNullableFilter<$PrismaModel> | $Enums.task_priority | null
  }

  export type NestedEnumtask_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.task_status | Enumtask_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.task_status[] | ListEnumtask_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.task_status[] | ListEnumtask_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumtask_statusNullableFilter<$PrismaModel> | $Enums.task_status | null
  }

  export type NestedEnumtask_priorityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.task_priority | Enumtask_priorityFieldRefInput<$PrismaModel> | null
    in?: $Enums.task_priority[] | ListEnumtask_priorityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.task_priority[] | ListEnumtask_priorityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumtask_priorityNullableWithAggregatesFilter<$PrismaModel> | $Enums.task_priority | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumtask_priorityNullableFilter<$PrismaModel>
    _max?: NestedEnumtask_priorityNullableFilter<$PrismaModel>
  }

  export type NestedEnumtask_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.task_status | Enumtask_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.task_status[] | ListEnumtask_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.task_status[] | ListEnumtask_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumtask_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.task_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumtask_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumtask_statusNullableFilter<$PrismaModel>
  }

  export type NestedEnumprovider_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.provider_type | Enumprovider_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.provider_type[] | ListEnumprovider_typeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.provider_type[] | ListEnumprovider_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumprovider_typeNullableFilter<$PrismaModel> | $Enums.provider_type | null
  }

  export type NestedEnumprovider_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.provider_type | Enumprovider_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.provider_type[] | ListEnumprovider_typeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.provider_type[] | ListEnumprovider_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumprovider_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.provider_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumprovider_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumprovider_typeNullableFilter<$PrismaModel>
  }

  export type taskCreateWithoutAttachmentsInput = {
    id?: string
    title: string
    description?: string | null
    due_date?: Date | string | null
    completed_date?: Date | string | null
    priority?: $Enums.task_priority | null
    status?: $Enums.task_status | null
    created_at?: Date | string | null
    subtask?: subtaskCreateNestedManyWithoutTaskInput
    users: usersCreateNestedOneWithoutTaskInput
  }

  export type taskUncheckedCreateWithoutAttachmentsInput = {
    id?: string
    user_id: number
    title: string
    description?: string | null
    due_date?: Date | string | null
    completed_date?: Date | string | null
    priority?: $Enums.task_priority | null
    status?: $Enums.task_status | null
    created_at?: Date | string | null
    subtask?: subtaskUncheckedCreateNestedManyWithoutTaskInput
  }

  export type taskCreateOrConnectWithoutAttachmentsInput = {
    where: taskWhereUniqueInput
    create: XOR<taskCreateWithoutAttachmentsInput, taskUncheckedCreateWithoutAttachmentsInput>
  }

  export type taskUpsertWithoutAttachmentsInput = {
    update: XOR<taskUpdateWithoutAttachmentsInput, taskUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<taskCreateWithoutAttachmentsInput, taskUncheckedCreateWithoutAttachmentsInput>
    where?: taskWhereInput
  }

  export type taskUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: taskWhereInput
    data: XOR<taskUpdateWithoutAttachmentsInput, taskUncheckedUpdateWithoutAttachmentsInput>
  }

  export type taskUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: NullableEnumtask_priorityFieldUpdateOperationsInput | $Enums.task_priority | null
    status?: NullableEnumtask_statusFieldUpdateOperationsInput | $Enums.task_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtask?: subtaskUpdateManyWithoutTaskNestedInput
    users?: usersUpdateOneRequiredWithoutTaskNestedInput
  }

  export type taskUncheckedUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: NullableEnumtask_priorityFieldUpdateOperationsInput | $Enums.task_priority | null
    status?: NullableEnumtask_statusFieldUpdateOperationsInput | $Enums.task_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtask?: subtaskUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type taskCreateWithoutSubtaskInput = {
    id?: string
    title: string
    description?: string | null
    due_date?: Date | string | null
    completed_date?: Date | string | null
    priority?: $Enums.task_priority | null
    status?: $Enums.task_status | null
    created_at?: Date | string | null
    attachments?: attachmentsCreateNestedManyWithoutTaskInput
    users: usersCreateNestedOneWithoutTaskInput
  }

  export type taskUncheckedCreateWithoutSubtaskInput = {
    id?: string
    user_id: number
    title: string
    description?: string | null
    due_date?: Date | string | null
    completed_date?: Date | string | null
    priority?: $Enums.task_priority | null
    status?: $Enums.task_status | null
    created_at?: Date | string | null
    attachments?: attachmentsUncheckedCreateNestedManyWithoutTaskInput
  }

  export type taskCreateOrConnectWithoutSubtaskInput = {
    where: taskWhereUniqueInput
    create: XOR<taskCreateWithoutSubtaskInput, taskUncheckedCreateWithoutSubtaskInput>
  }

  export type taskUpsertWithoutSubtaskInput = {
    update: XOR<taskUpdateWithoutSubtaskInput, taskUncheckedUpdateWithoutSubtaskInput>
    create: XOR<taskCreateWithoutSubtaskInput, taskUncheckedCreateWithoutSubtaskInput>
    where?: taskWhereInput
  }

  export type taskUpdateToOneWithWhereWithoutSubtaskInput = {
    where?: taskWhereInput
    data: XOR<taskUpdateWithoutSubtaskInput, taskUncheckedUpdateWithoutSubtaskInput>
  }

  export type taskUpdateWithoutSubtaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: NullableEnumtask_priorityFieldUpdateOperationsInput | $Enums.task_priority | null
    status?: NullableEnumtask_statusFieldUpdateOperationsInput | $Enums.task_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: attachmentsUpdateManyWithoutTaskNestedInput
    users?: usersUpdateOneRequiredWithoutTaskNestedInput
  }

  export type taskUncheckedUpdateWithoutSubtaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: NullableEnumtask_priorityFieldUpdateOperationsInput | $Enums.task_priority | null
    status?: NullableEnumtask_statusFieldUpdateOperationsInput | $Enums.task_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: attachmentsUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type attachmentsCreateWithoutTaskInput = {
    file_name: string
    original_name: string
    file_path: string
    mime_type?: string | null
    file_size?: bigint | number | null
    uploaded_at?: Date | string | null
  }

  export type attachmentsUncheckedCreateWithoutTaskInput = {
    id?: number
    file_name: string
    original_name: string
    file_path: string
    mime_type?: string | null
    file_size?: bigint | number | null
    uploaded_at?: Date | string | null
  }

  export type attachmentsCreateOrConnectWithoutTaskInput = {
    where: attachmentsWhereUniqueInput
    create: XOR<attachmentsCreateWithoutTaskInput, attachmentsUncheckedCreateWithoutTaskInput>
  }

  export type attachmentsCreateManyTaskInputEnvelope = {
    data: attachmentsCreateManyTaskInput | attachmentsCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type subtaskCreateWithoutTaskInput = {
    title: string
    description?: string | null
    status?: $Enums.subtask_status | null
    created_at?: Date | string | null
  }

  export type subtaskUncheckedCreateWithoutTaskInput = {
    id?: number
    title: string
    description?: string | null
    status?: $Enums.subtask_status | null
    created_at?: Date | string | null
  }

  export type subtaskCreateOrConnectWithoutTaskInput = {
    where: subtaskWhereUniqueInput
    create: XOR<subtaskCreateWithoutTaskInput, subtaskUncheckedCreateWithoutTaskInput>
  }

  export type subtaskCreateManyTaskInputEnvelope = {
    data: subtaskCreateManyTaskInput | subtaskCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutTaskInput = {
    username: string
    password: string
    provider?: $Enums.provider_type | null
    created_at?: Date | string | null
  }

  export type usersUncheckedCreateWithoutTaskInput = {
    id?: number
    username: string
    password: string
    provider?: $Enums.provider_type | null
    created_at?: Date | string | null
  }

  export type usersCreateOrConnectWithoutTaskInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTaskInput, usersUncheckedCreateWithoutTaskInput>
  }

  export type attachmentsUpsertWithWhereUniqueWithoutTaskInput = {
    where: attachmentsWhereUniqueInput
    update: XOR<attachmentsUpdateWithoutTaskInput, attachmentsUncheckedUpdateWithoutTaskInput>
    create: XOR<attachmentsCreateWithoutTaskInput, attachmentsUncheckedCreateWithoutTaskInput>
  }

  export type attachmentsUpdateWithWhereUniqueWithoutTaskInput = {
    where: attachmentsWhereUniqueInput
    data: XOR<attachmentsUpdateWithoutTaskInput, attachmentsUncheckedUpdateWithoutTaskInput>
  }

  export type attachmentsUpdateManyWithWhereWithoutTaskInput = {
    where: attachmentsScalarWhereInput
    data: XOR<attachmentsUpdateManyMutationInput, attachmentsUncheckedUpdateManyWithoutTaskInput>
  }

  export type attachmentsScalarWhereInput = {
    AND?: attachmentsScalarWhereInput | attachmentsScalarWhereInput[]
    OR?: attachmentsScalarWhereInput[]
    NOT?: attachmentsScalarWhereInput | attachmentsScalarWhereInput[]
    id?: IntFilter<"attachments"> | number
    task_id?: UuidFilter<"attachments"> | string
    file_name?: StringFilter<"attachments"> | string
    original_name?: StringFilter<"attachments"> | string
    file_path?: StringFilter<"attachments"> | string
    mime_type?: StringNullableFilter<"attachments"> | string | null
    file_size?: BigIntNullableFilter<"attachments"> | bigint | number | null
    uploaded_at?: DateTimeNullableFilter<"attachments"> | Date | string | null
  }

  export type subtaskUpsertWithWhereUniqueWithoutTaskInput = {
    where: subtaskWhereUniqueInput
    update: XOR<subtaskUpdateWithoutTaskInput, subtaskUncheckedUpdateWithoutTaskInput>
    create: XOR<subtaskCreateWithoutTaskInput, subtaskUncheckedCreateWithoutTaskInput>
  }

  export type subtaskUpdateWithWhereUniqueWithoutTaskInput = {
    where: subtaskWhereUniqueInput
    data: XOR<subtaskUpdateWithoutTaskInput, subtaskUncheckedUpdateWithoutTaskInput>
  }

  export type subtaskUpdateManyWithWhereWithoutTaskInput = {
    where: subtaskScalarWhereInput
    data: XOR<subtaskUpdateManyMutationInput, subtaskUncheckedUpdateManyWithoutTaskInput>
  }

  export type subtaskScalarWhereInput = {
    AND?: subtaskScalarWhereInput | subtaskScalarWhereInput[]
    OR?: subtaskScalarWhereInput[]
    NOT?: subtaskScalarWhereInput | subtaskScalarWhereInput[]
    id?: IntFilter<"subtask"> | number
    task_id?: UuidFilter<"subtask"> | string
    title?: StringFilter<"subtask"> | string
    description?: StringNullableFilter<"subtask"> | string | null
    status?: Enumsubtask_statusNullableFilter<"subtask"> | $Enums.subtask_status | null
    created_at?: DateTimeNullableFilter<"subtask"> | Date | string | null
  }

  export type usersUpsertWithoutTaskInput = {
    update: XOR<usersUpdateWithoutTaskInput, usersUncheckedUpdateWithoutTaskInput>
    create: XOR<usersCreateWithoutTaskInput, usersUncheckedCreateWithoutTaskInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTaskInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTaskInput, usersUncheckedUpdateWithoutTaskInput>
  }

  export type usersUpdateWithoutTaskInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    provider?: NullableEnumprovider_typeFieldUpdateOperationsInput | $Enums.provider_type | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    provider?: NullableEnumprovider_typeFieldUpdateOperationsInput | $Enums.provider_type | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type taskCreateWithoutUsersInput = {
    id?: string
    title: string
    description?: string | null
    due_date?: Date | string | null
    completed_date?: Date | string | null
    priority?: $Enums.task_priority | null
    status?: $Enums.task_status | null
    created_at?: Date | string | null
    attachments?: attachmentsCreateNestedManyWithoutTaskInput
    subtask?: subtaskCreateNestedManyWithoutTaskInput
  }

  export type taskUncheckedCreateWithoutUsersInput = {
    id?: string
    title: string
    description?: string | null
    due_date?: Date | string | null
    completed_date?: Date | string | null
    priority?: $Enums.task_priority | null
    status?: $Enums.task_status | null
    created_at?: Date | string | null
    attachments?: attachmentsUncheckedCreateNestedManyWithoutTaskInput
    subtask?: subtaskUncheckedCreateNestedManyWithoutTaskInput
  }

  export type taskCreateOrConnectWithoutUsersInput = {
    where: taskWhereUniqueInput
    create: XOR<taskCreateWithoutUsersInput, taskUncheckedCreateWithoutUsersInput>
  }

  export type taskCreateManyUsersInputEnvelope = {
    data: taskCreateManyUsersInput | taskCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type taskUpsertWithWhereUniqueWithoutUsersInput = {
    where: taskWhereUniqueInput
    update: XOR<taskUpdateWithoutUsersInput, taskUncheckedUpdateWithoutUsersInput>
    create: XOR<taskCreateWithoutUsersInput, taskUncheckedCreateWithoutUsersInput>
  }

  export type taskUpdateWithWhereUniqueWithoutUsersInput = {
    where: taskWhereUniqueInput
    data: XOR<taskUpdateWithoutUsersInput, taskUncheckedUpdateWithoutUsersInput>
  }

  export type taskUpdateManyWithWhereWithoutUsersInput = {
    where: taskScalarWhereInput
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyWithoutUsersInput>
  }

  export type taskScalarWhereInput = {
    AND?: taskScalarWhereInput | taskScalarWhereInput[]
    OR?: taskScalarWhereInput[]
    NOT?: taskScalarWhereInput | taskScalarWhereInput[]
    id?: UuidFilter<"task"> | string
    user_id?: IntFilter<"task"> | number
    title?: StringFilter<"task"> | string
    description?: StringNullableFilter<"task"> | string | null
    due_date?: DateTimeNullableFilter<"task"> | Date | string | null
    completed_date?: DateTimeNullableFilter<"task"> | Date | string | null
    priority?: Enumtask_priorityNullableFilter<"task"> | $Enums.task_priority | null
    status?: Enumtask_statusNullableFilter<"task"> | $Enums.task_status | null
    created_at?: DateTimeNullableFilter<"task"> | Date | string | null
  }

  export type attachmentsCreateManyTaskInput = {
    id?: number
    file_name: string
    original_name: string
    file_path: string
    mime_type?: string | null
    file_size?: bigint | number | null
    uploaded_at?: Date | string | null
  }

  export type subtaskCreateManyTaskInput = {
    id?: number
    title: string
    description?: string | null
    status?: $Enums.subtask_status | null
    created_at?: Date | string | null
  }

  export type attachmentsUpdateWithoutTaskInput = {
    file_name?: StringFieldUpdateOperationsInput | string
    original_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    mime_type?: NullableStringFieldUpdateOperationsInput | string | null
    file_size?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    uploaded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attachmentsUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    file_name?: StringFieldUpdateOperationsInput | string
    original_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    mime_type?: NullableStringFieldUpdateOperationsInput | string | null
    file_size?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    uploaded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attachmentsUncheckedUpdateManyWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    file_name?: StringFieldUpdateOperationsInput | string
    original_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    mime_type?: NullableStringFieldUpdateOperationsInput | string | null
    file_size?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    uploaded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subtaskUpdateWithoutTaskInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumsubtask_statusFieldUpdateOperationsInput | $Enums.subtask_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subtaskUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumsubtask_statusFieldUpdateOperationsInput | $Enums.subtask_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subtaskUncheckedUpdateManyWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumsubtask_statusFieldUpdateOperationsInput | $Enums.subtask_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type taskCreateManyUsersInput = {
    id?: string
    title: string
    description?: string | null
    due_date?: Date | string | null
    completed_date?: Date | string | null
    priority?: $Enums.task_priority | null
    status?: $Enums.task_status | null
    created_at?: Date | string | null
  }

  export type taskUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: NullableEnumtask_priorityFieldUpdateOperationsInput | $Enums.task_priority | null
    status?: NullableEnumtask_statusFieldUpdateOperationsInput | $Enums.task_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: attachmentsUpdateManyWithoutTaskNestedInput
    subtask?: subtaskUpdateManyWithoutTaskNestedInput
  }

  export type taskUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: NullableEnumtask_priorityFieldUpdateOperationsInput | $Enums.task_priority | null
    status?: NullableEnumtask_statusFieldUpdateOperationsInput | $Enums.task_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: attachmentsUncheckedUpdateManyWithoutTaskNestedInput
    subtask?: subtaskUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type taskUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: NullableEnumtask_priorityFieldUpdateOperationsInput | $Enums.task_priority | null
    status?: NullableEnumtask_statusFieldUpdateOperationsInput | $Enums.task_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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