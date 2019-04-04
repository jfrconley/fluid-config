import {ResolutionChain} from "./resolutionChain";
import {ConfigJSONResolver} from "./resolvers/configJSONResolver";
import {EnvirnonmentResolver} from "./resolvers/envirnonmentResolver";

export class FluidConfig {
	private isUsed = false;

	constructor(private resolutionChain: ResolutionChain) {}

	public setResolutionChain(resolutionChain: ResolutionChain) {
		if (this.isUsed) { throw Error("Chain cannot be changed after a value has been resolved"); }
		this.resolutionChain = resolutionChain;
	}

	public Value(path?: string, def?: string) {
		this.isUsed = true;
		return (target: Object, key: PropertyKey) => {
			const usedPath = path || key.toString();
			return this.createDescriptor(usedPath, def);
		};
	}

	private createDescriptor(path: string, def?: string): PropertyDescriptor | null {
		const value = this.resolutionChain.resolve(path) || def;
		if (value == null) { return; }
		return {
			enumerable: true,
			writable: false,
			value,
		};
	}
}

export const DefaultConfigurator = new FluidConfig(new ResolutionChain()
	.register(new EnvirnonmentResolver())
	.register(new ConfigJSONResolver()));
