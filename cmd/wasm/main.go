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
		var arr [50000000]int64

		for i := 0; i < len(arr); i++ {
			arr[i] = int64(i)
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
		var currentCount int64 = 0

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
		var arr [50000000]float64

		for i := 0; i < len(arr); i++ {
			arr[i] = float64(i)
		}

		for i := 0; i < len(arr); i++ {
			arr[i] = arr[i] / 3.1415
		}

		fmt.Println("Completed floating division test.")
		return completeString
	})

	return floatDivisionFunc
}

// Local bubble sort function.
func BubbleSort(array []int64) []int64 {
	for i := 0; i < len(array)-1; i++ {
		for j := 0; j < len(array)-i-1; j++ {
			if array[j] > array[j+1] {
				array[j], array[j+1] = array[j+1], array[j]
			}
		}
	}
	return array
}

// Array allocation with float division performing function.
func bubbleSortWrapper() js.Func {
	floatDivisionFunc := js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		fmt.Println("Starting bubble sort test...")
		var arr [50000]int64
		var arrLen int64 = int64(len(arr))

		for i := 0; i < len(arr); i++ {
			arr[i] = arrLen - int64(i)
		}

		BubbleSort(arr[:])

		fmt.Println("Completed bubble sort test.")
		return completeString
	})

	return floatDivisionFunc
}

// Main function.
func main() {
	js.Global().Set("arrayTest", arrayAllocWrapper())
	js.Global().Set("additionTest", additionTestWrapper())
	js.Global().Set("floatDivisionTest", floatDivisionWrapper())
	js.Global().Set("bubbleSortTest", bubbleSortWrapper())
	<-make(chan bool)
}
