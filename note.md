


    a??b
    a||b
    a&&b

    const a = {
        b: {
            c:1
        }
    }

    a.b.c
    a.x.c => throw error
    a?.x?.c  => undefinded
    ~~ if(a.x) {
        return a.x.c
    }

    a.b!.c

    x: null | udefined
    y = 2
    x!.a

    a&&b
    !a = true
    if(a && a.b ~~ a!.b)

    a && a.b =
    if(!a){
        return a
    } 
    return a.b

    a||b
    a = undefined, null, 0, false, '' return b
     if(a){
        return a
    } 
    return b

    a??b
    undefined, null return b