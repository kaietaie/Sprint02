let nameExp = /[A-Za-z]\S{2,20}/,
    sexExp = /^(?![\s\S])/,
    oldExp = /[1-9]{1}[0-9]{4}\S/;

function nameMaker() {
    let name = prompt("What animal is the superhero most similar to?");
    if( !name.match(nameExp)) {
        return alert("try one more time");
    }

    let sex = prompt("Is the superhero male or female? Leave blank if unknown or other.");
    if( !sex.match("male") && !sex.match("female") && !sex.match(sexExp)) {
        return alert("try one more time");
    }
    
    let old = prompt("How old is the superhero?");
    if( old.match(oldExp) || old.startsWith(0)) {
        return alert("try one more time");
    } 
    
    if (sex == "male" && old < 18) {
        desc = "boy";
        alert(`The superhero name is: ${name}-${desc}`);
    }
    else if (sex === "male" && old >=18) {
        desc = "man";
        alert(`The superhero name is: ${name}-${desc}`);
    }
    else if (sex === "female" && old <=18) {
        desc = "girl";
        alert(`The superhero name is: ${name}-${desc}`);
    }
    else if (sex === "female" && old >=18) {
        desc = "woman";
        alert(`The superhero name is: ${name}-${desc}`);
    }
    else if (sex === "" && old <=18) {
        desc = "kid";
        alert(`The superhero name is: ${name}-${desc}`);
    }
    else if (sex === "" && old >=18) {
        desc = "hero";
        alert(`The superhero name is: ${name}-${desc}!`);
    }
}

nameMaker()