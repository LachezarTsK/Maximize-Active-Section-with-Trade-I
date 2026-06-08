
class Solution {

    fun maxActiveSectionsAfterTrade(input: String): Int {
        var totalNumberOfOnes = 0
        var numberOfZerosBeforeOnes = 0
        var maxNumberOfZerosToTransform = 0

        var i = 0
        while (i < input.length) {

            var numberOfOnesBetweenZeros = 0
            while (i < input.length && input[i] == '1') {
                ++i
                ++totalNumberOfOnes
                ++numberOfOnesBetweenZeros
            }

            var numberOfZerosAfterOnes = 0
            while (i < input.length && input[i] == '0') {
                ++i
                ++numberOfZerosAfterOnes
            }

            if (numberOfZerosBeforeOnes > 0 && numberOfOnesBetweenZeros > 0 && numberOfZerosAfterOnes > 0) {
                maxNumberOfZerosToTransform = Math.max(maxNumberOfZerosToTransform, numberOfZerosBeforeOnes + numberOfZerosAfterOnes)
            }

            numberOfZerosBeforeOnes = numberOfZerosAfterOnes
        }

        return totalNumberOfOnes + maxNumberOfZerosToTransform
    }
}
