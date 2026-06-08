
package main

func maxActiveSectionsAfterTrade(input string) int {
    totalNumberOfOnes := 0
    numberOfZerosBeforeOnes := 0
    maxNumberOfZerosToTransform := 0

    for i := 0; i < len(input); i++ {

        numberOfOnesBetweenZeros := 0
        for i < len(input) && input[i] == '1' {
            i++
            totalNumberOfOnes++
            numberOfOnesBetweenZeros++
        }

        numberOfZerosAfterOnes := 0
        for i < len(input) && input[i] == '0' {
            i++
            numberOfZerosAfterOnes++
        }

        if numberOfZerosBeforeOnes > 0 && numberOfOnesBetweenZeros > 0 && numberOfZerosAfterOnes > 0 {
            maxNumberOfZerosToTransform = max(maxNumberOfZerosToTransform, numberOfZerosBeforeOnes + numberOfZerosAfterOnes)
        }

        i--
        numberOfZerosBeforeOnes = numberOfZerosAfterOnes
    }

    return totalNumberOfOnes + maxNumberOfZerosToTransform
}
