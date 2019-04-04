import {DefaultConfigurator} from "./lib/fluidConfig";

export const Value = DefaultConfigurator.Value.bind(DefaultConfigurator);
export const setResolutionChain = DefaultConfigurator.setResolutionChain.bind(DefaultConfigurator);
export {FluidConfig} from "./lib/fluidConfig";
export {ResolutionChain} from "./lib/resolutionChain";
export {ParameterResolver} from "./lib/parameterResolver";
export {EnvirnonmentResolver} from "./lib/resolvers/envirnonmentResolver";
export {ConfigJSONResolver} from "./lib/resolvers/configJSONResolver";
