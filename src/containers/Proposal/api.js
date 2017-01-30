/**
 * Created by jainpri on 1/17/2017.
 */


const getProposal = () => ( {
  "data":{
    "series": [{
      color: '#ea8e8e',
      name: 'John',
      data: [0,1,3,6,10,15,21,28]
    }, {
      color: '#b7f9b9',
      name: 'Jane',
      data: [0,3,6,11,18,27,38,51]
    },
      {
        color: '#7eb8ea',
        name: 'jason',
        data: [0,1,2.5,5.5,7.5,9,12,15]
      }]
  },
  "strategy":[
      {
        name:"1",
        title: "This one's more conservative",
        stocks:["14% Domestic Stock", "6% Foreign Stock","50% Bonds","30% Short-Term"]
      },
      {
        name:"2",
        title: "This one's more conservative",
        stocks:["21% Domestic Stock", "9% Foreign Stock","50% Bonds","20% Short-Term"]
      },
      {
        name:"3",
        title: "This one's more conservative",
        stocks:["28% Domestic Stock", "12% Foreign Stock","45% Bonds","15% Short-Term"]
      }
      /*,{
        name:"4",
        preferred: "yes",
        title: "We suggest this strategy for your GS Go account",
        stocks:["35% Domestic Stock", "15% Foreign Stock","40% Bonds","10% Short-Term"]
      },
      {
        name:"5",
        title: "This one's more aggressive",
        stocks:["42% Domestic Stock", "18% Foreign Stock","35% Bonds","5% Short-Term"]
      },
      {
        name:"6",
        title: "This one's more aggressive",
        stocks:["49% Domestic Stock", "21% Foreign Stock","25% Bonds","5% Short-Term"]
      },
      {
        name:"7",
        title: "This one's more aggressive",
        stocks:["60% Domestic Stock", "25% Foreign Stock","15% Bonds","1% Short-Term"]
      }*/]
})

export default getProposal;