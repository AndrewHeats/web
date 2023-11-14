import ItemTemplate from "./zoo_template";
import zoo1 from "./images/zoo1.png";
import zoo2 from "./images/zoo2.png";
import zoo3 from "./images/zoo3.png";

let zoo_list = [
    {
        imgSrc: zoo1,
        title: "Ohio zoo",
        desc: "The Columbus Zoo and Aquarium is located in Powell, Ohio, just north of Columbus. It is one of the largest and most famous zoos in the United States. The zoo is known for its diverse collection of animals, conservation efforts, and educational programs."

    },
    {
        imgSrc: zoo2,
        title: "Berlin zoo",
        desc: "The Berlin Zoo, officially known as the 'Zoologischer Garten Berlin' in German, is one of the most famous and historic zoos in the world. Here are some key details about the Berlin Zoo:"

    },
    {
        imgSrc: zoo3,
        title: "Paris zoo",
        desc: "The Paris Zoological Park, commonly known as the 'Parc Zoologique de Paris' or 'Zoo de Vincennes,' is a prominent zoo located in the eastern part of Paris, France. Here's some information about the Paris Zoo:"
    }
];


function Zoos(){
    return (
        <div className="_container">
            
        {zoo_list.map((zoo, index) => (
            <ItemTemplate
            key={index}
            imgSrc={zoo.imgSrc}
            title={zoo.title}
            desc={zoo.desc}
            />
        ))}      
        </div>
    );
}

export default Zoos