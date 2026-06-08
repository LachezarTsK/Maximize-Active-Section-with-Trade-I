
/**
 * @param {string} input
 * @return {number}
 */
var maxActiveSectionsAfterTrade = function (input) {
    let totalNumberOfOnes = 0;
    let numberOfZerosBeforeOnes = 0;
    let maxNumberOfZerosToTransform = 0;

    for (let i = 0; i < input.length; ++i) {

        let numberOfOnesBetweenZeros = 0;
        while (i < input.length && input.charAt(i) === '1') {
            ++i;
            ++totalNumberOfOnes;
            ++numberOfOnesBetweenZeros;
        }

        let numberOfZerosAfterOnes = 0;
        while (i < input.length && input.charAt(i) === '0') {
            ++i;
            ++numberOfZerosAfterOnes;
        }

        if (numberOfZerosBeforeOnes > 0 && numberOfOnesBetweenZeros > 0 && numberOfZerosAfterOnes > 0) {
            maxNumberOfZerosToTransform = Math.max(maxNumberOfZerosToTransform, numberOfZerosBeforeOnes + numberOfZerosAfterOnes);
        }

        --i;
        numberOfZerosBeforeOnes = numberOfZerosAfterOnes;
    }

    return totalNumberOfOnes + maxNumberOfZerosToTransform;
};
