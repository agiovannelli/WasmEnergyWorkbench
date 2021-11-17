package main

import (
	"fmt"
	"syscall/js"
)

// Global variables
const maximumCount int = 2147483647
const completeString string = "Complete"

// Array allocation wrapper function.
func arrayAllocWrapper() js.Func {
	arrayAllocFunc := js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		fmt.Println("Starting array allocation test...")
		var arr [500000000]int

		for i := 0; i < len(arr); i++ {
			arr[i] = i
		}

		fmt.Println("Completed array allocation test.")
		return completeString
	})

	return arrayAllocFunc
}

// Maximum integer addition function.
func additionTestWrapper() js.Func {
	additionFunc := js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		fmt.Println("Starting integer addition test...")
		currentCount := 0

		for i := 0; i < maximumCount; i++ {
			currentCount++
		}

		fmt.Println("Completed integer addition test.")
		return completeString
	})

	return additionFunc
}

// Array allocation with float division performing function.
func floatDivisionWrapper() js.Func {
	floatDivisionFunc := js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		fmt.Println("Starting floating division test...")
		var arr [500000000]float32

		for i := 0; i < len(arr); i++ {
			arr[i] = float32(i)
		}

		for i := 0; i < len(arr); i++ {
			arr[i] = arr[i] / 3.1415
		}

		fmt.Println("Completed floating division test.")
		return completeString
	})

	return floatDivisionFunc
}

// Main function.
func main() {
	js.Global().Set("arrayTest", arrayAllocWrapper())
	js.Global().Set("additionTest", additionTestWrapper())
	js.Global().Set("floatDivisionTest", floatDivisionWrapper())
	<-make(chan bool)
}
