function analyze(){
    const text = document.getElementById("userText").value;

    //character count
    const charCount = text.replace(/\s/g, "").length;

    //cleaning the text and counting the words
    const cleanText = text.trim().toLowerCase();
    const words = cleanText.split(/\s+/);
    const wordCount = words.filter(word => word).length;

    //counting the vowels
    const vowels = text.match(/[aeiou]/gi);
    const vowelCount = vowels ? vowels.length : 0;

    //Finding the word which repeats most times
    const cleanWords = cleanText.replace(/[^\w\s@.+-]/g, "").split(/\s+/);
    const wordStore = {};
    let muw = "";
    let maxCount = 0;

    for(let word of cleanWords){
        if(word === "") continue;
        wordStore[word] = (wordStore[word] || 0) + 1;
        if(wordStore[word] > maxCount){
            maxCount = wordStore[word];
            muw = word;
        }
    }
    
    //Finding the emails
    const emailregex = /[\w.+-]+@[\w.+-]+\.[\w]{2,}/gi;
    const email = text.match(emailregex) || [];

    //Finding the phone-numbers
    const pN = /(\+91[\-\s]?)?[6-9]\d{9}|\d{3}[-\s]?\d{8}|\+\d{1,3}[-\s]?\d{3}[-\s]?\d{3,5}[-\s]?\d{3,5}/g;
    const p_N = text.match(pN) || [];

    //Displaying the result on the website
    document.getElementById("result").innerHTML = `
    <strong>Character Count:</strong> ${charCount}<br>
    <strong>Word Count : </strong> ${wordCount}<br>
    <strong>Vowels Count : </strong> ${vowelCount}<br>
    <strong>Most used Word : </strong> ${muw || 'NA'}, ${maxCount} times.<br>
    <strong>Emails Found : </strong> ${email.length > 0 ? email.join(", ") : 'NA'}<br>
    <strong>Phone Numbers Found : </strong> ${p_N.length > 0 ? p_N.join(", ") : 'NA'}
    `;
}