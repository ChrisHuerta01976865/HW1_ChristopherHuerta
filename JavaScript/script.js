/*
 File: script.js
 GUI Assignment: Creating first web page
 Christopher Huerta
 9/08/25
here i run my JS script which is how i am able to filter the content on the main webpage as well as update it
i did this through an event listener and my applyfilter function. this was all pretty similar to work ive done in mobile app 
so it wasnt that much work to add to this assignment
*/


// sets up the containers for my filters
const filters = document.querySelector('.filters');
//creates the array for my cards which are used in my gallery
const cards = Array.from(document.querySelectorAll('#gallery .card'));

//this is what i use to filter the gallery. i used or since im dont have a 
//large amount of pictures but would recommend using and if the amount of pictures is large
const MODE = 'OR';


//my function here obtains the tags the user selects then compares them with the
//tags i set on each photo if the requested tags and photo tags match it displays the photos
//otherwise the photos that dont match disappear
function applyFilter() {
    const selected = Array.from(filters.querySelectorAll('input[name="tag"]:checked'))
                .map(i => i.value.toLowerCase());
    //this is the default cause which shows all cards
    if (selected.length === 0) {
        cards.forEach(c => c.classList.remove('hidden'));
        return;
    }

    //here i loop through the cards and see if they match the filter
    cards.forEach(card => {
        //i get the tags from the images here
        const tags = card.dataset.tags.split(',').map(t => t.trim().toLowerCase());

        //here i compare to see if the tags match the filter tags
        const matches = MODE === 'AND'
        ? selected.every(tag => tags.includes(tag)) //this filters for a specific tag
        : selected.some(tag => tags.includes(tag)); //this filters for when more then one filter is selected
        card.classList.toggle('hidden', !matches);
    });
    
}
//this is just a common event listener that updates when the check box updates
filters.addEventListener('change', applyFilter);
applyFilter();