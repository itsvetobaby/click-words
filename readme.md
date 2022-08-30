        this is the clickwords repo. 

        define keywords in an array, or send a request to the server and it will ping them back and place them in the side bar and underline them
        i defined this pages keywords in an array. they are  ["hello", "world", "foo", "bar", "baz", "qux", "quux", "corge", "grault", "garply", "waldo", "fred", "plugh", "xyzzy", "thud"]; 
        type them and wait a sec and they will underline themselves.
        this code base was taken from  a project i did and i have long forgetten the inner-workings of. i yanked bits out so that it would work a plain webpage working without a server. having said that to run this html file you need to use 
            ```
                npx serve
            ```
            
        walking text nodes and inserting styled spans is not that easy so i hope this code saved you some time. theres some messy tracking work splitting up what you type. if you're trying to de-cypher whats going on then i left the console.log() madness intact which helped me figure out how to build it.   
        to include in your own code includes the scripts and css files in the header and the scripts in the body. I tried to move it into a seperate file but the profits of having hacked foreign-bodies together brings the curse of matted, tangled and dependent code. 
    
 
        
