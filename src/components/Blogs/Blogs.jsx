import React from 'react';

const Blogs = () => {
    return (
        <div className='m-4'>
            <h4 className='text-2xl font-semibold'>1. When should you use context API?</h4> <br />
            <p><span className='font-semibold'>Answer:</span> Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p><br />
            <hr />

            <h4 className='text-2xl font-semibold'>2.What is a custom hook?</h4><br />
            <p><span className='font-semibold'>Answer:</span> A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. Let's take a look at some major differences between a custom React JS hook and React JS components: A custom hook does not require a specific signature.</p><br />
            <hr />

            <h4 className='text-2xl font-semibold'>3. What is useRef?</h4> <br />
            <p><span className='font-semibold'>Answer:</span> useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current .</p><br /><hr />

            <h4 className='text-2xl font-semibold'>4.What is useMemo?</h4><br />
            <p><span className='font-semibold'>Answer:</span> useMemo() is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations.</p>
        </div>
    );
};

export default Blogs;