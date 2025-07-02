let Bookdetails =[
    {
        "bookid":1,
        "booktitle":"Iron Man: Extremis",
        "bookauthor":"Warren Ellis",
        "bookgenre":"Superhero / Sci-Fi",
        "bookyear":2005,
        "bookdescription":"A defining Iron Man arc where Tony Stark upgrades his biology with the Extremis virus, merging man and machine."
    },
    {
        "bookid":2,
        "booktitle":"Batman: The Killing Joke",
        "bookauthor":"Alan Moore",
        "bookgenre":"Graphic Novel / Crime",
        "bookyear":1988,
        "bookdescription":"A dark exploration of Joker's origin and his twisted confrontation with Batman."
    },
    {
        "bookid":3,
        "booktitle":"Spider-Man: Blue",
        "bookauthor":"Jeph Loeb & Tim Sale",
        "bookgenre":"Superhero / Romance",
        "bookyear":2002,
        "bookdescription":"Peter Parker reflects on his early days as Spider-Man and his love for Gwen Stacy."
    },
    {
        "bookid":4,
        "booktitle":"Captain America: Winter Soldier",
        "bookauthor":"Ed Brubaker",
        "bookgenre":"Superhero / Spy Thriller",
        "bookyear":2005,
        "bookdescription":"Captain America uncovers a Soviet assassin known as the Winter Soldier — who turns out to be his old friend Bucky Barnes."
    },
]

export const added=(obj)=>{
    Bookdetails.push(obj)
}

export const view=()=>{
    return Bookdetails;
}

export const read=(index)=>{
    return Bookdetails[index];
}

export const fetch=(title)=>{
    const temp=Bookdetails.filter((element)=>{
        return element.booktitle===title;
    })
    return temp[0];
}

export const update=(ele,index)=>{
    Bookdetails[index]=ele;
}
export const deleteing=(index)=>{
    
    Bookdetails=Bookdetails.filter((ele,ind)=>{
        return ind!==index;
    })
    return Bookdetails;
}