import {ParameterResolver} from "./parameterResolver";

export class ResolutionChain {
	private resolverChain: ParameterResolver[] = [];
	private resolverMap: {[key: string]: ParameterResolver} = {};

	public register(resolver: ParameterResolver): ResolutionChain {
		this.resolverChain.push(resolver);
		// this.resolverMap[key as any] = resolver;
		return this;
	}

	public resolve(path: string): string | null {
		let value: string | null;
		for (const resolver of this.resolverChain) {
			value = resolver.resolve(path);
			if (value != null) { break; }
		}
		return value;
	}

	// public resolveWith(path: string, key: ParameterResolverIdentifier): string | null {
	// 	return this.resolverMap[key as any].resolve(path);
	// }
}
