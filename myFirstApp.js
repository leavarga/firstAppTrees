$(document).ready(function() {

    let imagesData = [
        {
            photo: 'photo1.jpg',
            title: 'Spring',
            description: "Loney Oak tree in spring - The wisdom of a lonely tree is higher than the wisdom of the forest, because there is more thinking in it! If you see a lonely tree in the middle of nowhere, plant a tree next to it!"
        },
       
        {
            photo: 'photo4.jpg',
            title: 'Summer',
            description: "Loney Oak tree in summer - According to a popular belief among the ancient greeks, tree elves, or dryads, live in oak trees. anyone wandering through a leafy oak grove in spring or summer will perhaps hear their laughter – mixed in with the buzzing, the mumming and the birdsong"
        },
        {
            photo: 'photo3.jpg',
            title: 'Autumn',
            description: "Loney Oak tree in autumn - Since the earliest ties between humans and oaks, a very strong symbolic image of oaks has developed in which these trees have become associated with longevity, strength, stability, endurance, fertility, power, justice, and honesty "
        },
    
        {
            photo: 'photo2.jpg',
            title: 'Winter',
            description: "Lonely tree in winter - Thus in winter stands the lonely tree, Nor knows what birds have vanished one by one, Yet knows its boughs more silent than before: I cannot say what loves have come and gone, I only know that summer sang in me A little while, that in me sings no more."
        }
    ];

    let currentPhoto = 0;

    let loadPhoto = (photoNumber) => {
        $('.thumbnail').removeClass('active');
        $(`.thumbnail[data-number="${photoNumber}"]`).addClass('active');

        $("#photo").attr('src', imagesData[photoNumber].photo);
        $('#photo-title').text(imagesData[photoNumber].title);
        $('#photo-description').text(imagesData[photoNumber].description);

        $('#photo-counter').text(`Photo ${photoNumber + 1} of ${imagesData.length}`);
    };  

    loadPhoto(currentPhoto);

    $("#prev-arrow").click(function(){
        currentPhoto = (currentPhoto - 1 + imagesData.length) % imagesData.length;
        loadPhoto(currentPhoto);
    });

    $("#next-arrow").click(function() {
        currentPhoto = (currentPhoto + 1) % imagesData.length;
        loadPhoto(currentPhoto);
    }); 


    imagesData.forEach((image, index) => {
        const thumbnail = $('<div>', {
            class: 'thumbnail',
            'data-number': index
        }).append($('<img>', { src: image.photo }));

        thumbnail.appendTo('#thumbnails-container');
    });

    $('.thumbnail').click(function() {
        const clickedIndex = $(this).attr('data-number');
        currentPhoto = parseInt(clickedIndex);
        loadPhoto(currentPhoto);
    });
});

