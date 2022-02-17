let num = 1,
    big = 9999n,
    str = "",
    bool = true,
    nul = null,
    undef,
    obj = {},
    sym = Symbol(),
    foo = function() {};

alert( `num is ${typeof(num)}
        big is ${typeof(big)}
        str is ${typeof(str)}
        bool is ${typeof(bool)}
        nul is ${typeof(nul)} 
        undef is ${typeof(undef)}
        obj is ${typeof(obj)}
        sym is ${typeof(sym)}
        foo is ${typeof(foo)}`
)