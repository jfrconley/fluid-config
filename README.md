# Fluid Config
_An experiment in flexible configuration management_

## Basic usage
The goal is to be able to specify config values from multiple sources to be made available through runtime injection.
```typescript
import {Value} from "fluid-config"

export class SomeClass {
	@Value() private aParam: string;
	@Value("config.var") private otherValue: string;

	public printValues() {
		console.log(this.aParam);
		console.log(this.otherValue);
	}
}
```

The @Value annotation will specify that a variable must be resolved from the ResolutionChain, which can contain many 
individual resolvers (currently environment and config.json). Additional resolvers can be specified by either setting a
new ResolverChain or explicitly instantiating a Configurator instance.

```typescript
import {Value, setResolutionChain, ResolutionChain, EnvirnonmentResolver} from "fluid-config"

const customChain = new ResolutionChain()
    // use built in resolver
    .register(new EnvirnonmentResolver())
    // custom resolver
    .register({resolve(path: string) {return "somevalue"}})

// Override default global chain
setResolutionChain(customChain);

export class SomeClass {
	@Value() private aParam: string;
    @Value("config.var") private otherValue: string

	public printValues() {
		console.log(this.aParam);
	}
}
```
