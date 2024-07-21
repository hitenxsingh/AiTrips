export const SelectTravelesList=[
    {
        id:1,
        title:'Just Me',
        desc:'A sole traveles in exploration',
        icon:'🧗‍♂️',
        people:'1'
    },
    {
        id:2,
        title:'A Couple',
        desc:'Two travelers in tandem',
        icon:'🥂',
        people:'2'
    },
    {
        id:3,
        title:'Family',
        desc:'A group of fun loving adv',
        icon:'🏡',
        people:'3 to 5'
    },
    {
        id:4,
        title:'Friends',
        desc:'A bunch of thrill-seekers',
        icon:'🏕️',
        people:'5 to 10'
    },
]

export const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon:'🪙',
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on the average side',
        icon:'💰',
    },
    {
        id:3,
        title:'Luxury',
        desc:'Do not worry about cost',
        icon:'💸',
    },
]

export const AI_PROMPT=`Generate travel plan for location: {location}, for {totalDays} days for {traveler} people with a {budget} budget, give me a Hotels options list with Hotel Name,address, price, image url, geo cordinates, rating, description and suggest itinerary with placeName, place details, place image url, geo cordinates, ticket pricing ,time to travel each location for {totalDays} days with each day plan with best time to visit in JSON format`