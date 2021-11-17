<h1>WebAssembly Energy Efficiency Repository</h1>
<p>
    The code contained in this repository is meant to test WebAssembly across Go and Rust programming languages. It additionally provides JavaScript equivalent code for baseline comparison. The intent of the functions within is to perform memory and computationally expensive processes in an effort to guage energy consumption from their respective execution. This is only a sandbox for local hosting.
</p>
<h2>
    Execution
</h2>
<h3>
    GoLang
</h3>
<p>
    In order to build the 'maingo.wasm' file required in the index.html after making changes to the .go file, navigate to cmd/wasm directory in the terminal. Call 'GOOS=js GOARCH=wasm go build -o ../../assets/maingo.wasm'. To execute the GUI for GoLang WebAssembly testing purposes, navigate to cmd/server directory. Call 'go run main.go' to have the localhost at port 8080 run functionality.
</p>
<h2>
    Helpful links
</h2>
<p>
    The following links are documents and resources that helped facilitate the code contained within the repository.
</p>
<ul>
    <li>
        <a href="https://webassembly.org">WebAssembly Website</a>
    </li>
    <li>
        <a href="https://github.com/golang/go/wiki/WebAssembly#getting-started">WebAssembly Go Wiki</a>
    </li>
    <li>
        <a href="https://golangbot.com/webassembly-using-go/">Introduction to WebAssembly using Go: Tutorial</a>
    </li>
</ul>