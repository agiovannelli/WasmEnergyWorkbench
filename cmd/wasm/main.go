package main

import (
	"crypto/sha256"
	"strings"
	"syscall/js"
)

// Global variables
const maximumCount int = 2147483647
const completeString string = "Complete"
const repeatTaskAmount int = 20

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

// Maximum integer addition function.
func additionTestWrapper() js.Func {
	additionFunc := js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		for j := 0; j < repeatTaskAmount; j++ {
			var currentCount int64 = 0
			for i := 0; i < maximumCount; i++ {
				currentCount++
			}
		}

		return completeString
	})

	return additionFunc
}

// Array allocation with float division performing function.
func bubbleSortWrapper() js.Func {
	floatDivisionFunc := js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		for j := 0; j < repeatTaskAmount; j++ {
			var arr [50000]int64
			var arrLen int64 = int64(len(arr))

			for i := 0; i < len(arr); i++ {
				arr[i] = arrLen - int64(i)
			}

			BubbleSort(arr[:])
		}

		return completeString
	})

	return floatDivisionFunc
}

// Function to create 250k char string and hash to sha256.
func hashWrapper() js.Func {
	hashFunc := js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		for j := 0; j < repeatTaskAmount; j++ {
			var s strings.Builder
			for i := 0; i < 250000; i++ {
				s.WriteRune('A')
			}
			sha256.Sum256([]byte(s.String()))
		}
		return completeString
	})

	return hashFunc
}

// Main function.
func main() {
	js.Global().Set("additionTest", additionTestWrapper())
	js.Global().Set("bubbleSortTest", bubbleSortWrapper())
	js.Global().Set("hashTest", hashWrapper())
	<-make(chan bool)
}
