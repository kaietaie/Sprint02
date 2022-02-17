let str1 = `Betty Botter had some butter, "but" she said, "this butter's bitter. If I bake this bitter butter, it would make my batter bitter. But a bit of better butter - that would make my batter better." `,
    str2 = `She sells seashells by the seashore`,
    str3 = `might you might a mightned might into an un-mightned might like a mightner might might a mightned might into an un-mightned might?`,
    str1_conc = `So she bought a bit of butter, better than her bitter butter, and she baked it in her batter, and the batter was not bitter. 
            So 'twas better Betty Botter bought a bit of better butter.`;

alert(
    `Just a string:\n${str1}
    Length:${str1.length}
    Concatenation in a phrase:\n ${str1+ str1_conc}
    To uppercase: ${str2.toUpperCase()}
    Replase all occurrences:\n ${str3.replace(/might/gi, `can`)}
    `
)