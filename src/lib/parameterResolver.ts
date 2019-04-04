// export type ParameterResolverIdentifier = symbol;

export interface ParameterResolver {
	resolve(path: string): string | null;
}
