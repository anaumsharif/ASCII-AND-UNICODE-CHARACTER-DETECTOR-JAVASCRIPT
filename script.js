function detectCharacter(){
    const characterInput = document.getElementById("characterInput");
    const result = document.getElementById("result");

    const character =characterInput.value;
    if(isASCII(character)){
        result.innerText = 'The Entered character is an ASCII Character ';
    }else{
        result.innerText = 'The Entered character is an UNICODE  Character ';
    }

}
    
function isASCII(character){
    return character.charCodeAt(0)<=127;
}