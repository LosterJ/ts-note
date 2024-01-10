TypeScript is JS with added syntax for types.
***

**Why should I use TS**
    JS is loosely typed lang, so it can be difficult to understand what type of data are being passed around in JS.
    Dev need to look at documentation or guess based on the implementation.
    TS allow specifying the types of data being passed around within the code, and has ability to report errors when the types don't match.
    (TS uses compile time type checking, it checks if the specified types match *before running the code*, not while running the code)

**How to use**
    Use official TS compiler, which transplies TS code into JS.
    >`npm install typescript --save-dev`
    Compiler is installed in the node_modules dir and can be run with:
    >`npx tsc`
    By default, TS compiler will print a help msg when run in an empty project.
    The compiler can be configured using a tsconfig.json file:
    >`npx tsc --init`

**Simple Types**
    3 main primatives in JS and TS: boolean, number, string.
    2 less common primitives used in later versions of JS and TS: bigint, symbol.
    2 main ways TS assigns a type:
    - Explicit:
        `let firstName: string = "Dylan"`
    - Implicit:
        `let firstName = "Dylan"`
        Implicit assignment forces TS to infer the value.
    Error in Type Assignment
        TS will throw an error if data types do not match. (JS not)
    Unable to Infer
        TS may not always properly infer what the type of a variable may be. In such cases, it will set the type to **any** which disables type checking.
        This behavior can be disable by enabling noImplicitAny as an option in a TypeScript's project tsconfig.json.
        (That is a JSON config file for customizing how some of TS behaves)

**TypeScipt Special Types**
    - any: is a type that disables type checking and effectively allows all types to be used.
        `let v: any = true;`
        `v = "string";`
        `Math.round(v);`
        *any* can be useful way to get past errors since it disables type checking, but TS will not be able provide type safety, 
        and tools which rely on type data, such as auto completion, will not work. Remember, it should be avoided at "any" cost...
    - unknown: is a similar, but safer alternative to any.
        >test.ts
        *unknown* is the best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.
        Casting is when we use the "as" keyword to say property or variable is of the casted type.
    - never: effectively throws an error whenever it is defined. It is rarely used, especially by itself, its primary use is in *advanced generics*
    - undefined/null:
        `let y: undefined = undefined;`
        `let z: null = null;`

**Array**
    array can declare by using "[]" and the list of array's item inside it
        `const names: string[] = [];`
        `names.push("Dylan"); //Oke`
        `names.push(89); //Error`
    - readonly: use this keyword to prevent arrays from being changed
        `const names: readonly string[] = ["Dylan"];`
        `names.push("Jack"); //Error: push does not exist on type 'readonly string[]'`
    TS can infer the type of an array if it has values

**Tuples**
    A tuple is a typed array with a pre-defined length and types for each index, they allow each element in the array to be a known type of value.
    To define a tuple, specify the type of each element in the array:
        `let ourTuple: [number, boolean, string];`
        `ourTuple = [5, true, 'This oke'];`
    Tuples only have strongly defined types for the initial values (if you try to set them in the wrong order, it'll be error).
    But in the upper code, you easily to push some new elements to this tuple, but if you want to fix this tuple, you can use readonly to do this.
        `const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];`
        `ourReadonlyTuple.push("fjasdkf"); //error because this tuple is readonly`

**Object Type**
    test.ts
        <!--
        const car: { type: string, model: string, year?: number } = {
            type: "Toyota",
            model: "Corolla"
        };
        car.year = 2009;
        -->
    - index signatures: can be used for object without a defined list of properties

**Enums**
    is a special "class" that represents a group of constants (unchangeable variables), it come in 2 flavors *string* and *numeric*
    - numeric enums (enums.ts)
        (default): the first value to 0 and add 1 each additional value
        (initialized): set the value of the first numeric enum and have it increment from that
        (fully initialized): assign unique number values for each enum value
    - string enums (stringEnums.ts)

**Aliases and Interfaces**
    TS allows types to be defined separately from variables that use them.