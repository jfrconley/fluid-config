import {ParameterResolver} from "../parameterResolver";

export class EnvirnonmentResolver implements ParameterResolver {
	// public static readonly Identifier = Symbol("env");

	public resolve(path: string): string {
		return process.env[path];
	}
}
