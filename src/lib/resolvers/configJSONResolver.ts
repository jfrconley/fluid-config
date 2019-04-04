import {ParameterResolver} from "../parameterResolver";
import {join} from "path";
const get = require("lodash.get");

export class ConfigJSONResolver implements ParameterResolver {
	// public static readonly Identifier = Symbol("config-json");
	private readonly configJSON: any = {};
	private readonly resolvedPath: string = "";

	constructor(configPath: string = "config.json") {
		this.resolvedPath = this.resolveConfigPath(configPath);
		try {
			this.configJSON = require(this.resolvedPath);
		} catch (err) {
			console.log("Invalid config.json: " + this.resolvedPath);
		}
	}

	public resolve(path: string): string | null {
		return get(this.configJSON, path);
	}

	private resolveConfigPath(configPath: string): string {
		const pathSplit = __dirname.split("node_modules");
		if (pathSplit.length === 1) {
			return join(pathSplit[0], "../../../", configPath);
		} else {
			return join(pathSplit[0], configPath);
		}
	}
}
