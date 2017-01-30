/**
 * Created by jainpri on 1/11/2017.
 */


 const getQuestionsList = () => ( {
  "list": [
    {
      "title": "This account is for",
      "options":{
          "type": "radio",
          "name": "accountFor",
          "values": [{
            "name": "JustMe",
            "label": "Just Me",
            "action": "next", // possible values - next, message
            //"image": "icon-me-only"
          },
          {
            "name": "MeAndPartner",
            "label": "Me and Partner",
            "action": "next",
            //"image": "icon-partner"
          }]
      }
    },
    {
      "title": "I am investing for",
      "options": {
        "type": "radio",
        "name": "investingFor",
        "values": [{
          "name": "retirement",
          "label": "Retirement",
          "action": "next",
          //"image": "icon-retirement",
          "description": "for income after you've stopped working"
        },
        {
          "name": "somethingElse",
          "label": "Something Else",
          "action": "next",
          //"image": "icon-something-else",
          "description": "for something like a house or a car"
        }]
      }
    },
    {
      "title": "And my preferred account type is",
      "helpText": "Help me choose",
      "helpMessage": {
        "heading": "Help me Choose",
        "text": "A tax-advantaged account, such as an IRA, can provide tax savings for many investors and may be a good way to increase the amount of money you have in retirement. However, there are limits on the amount you can contribute in any given year."
      },
      "options": {
        "type": "radio",
        "name": "accountType",
        "values": [{
          "name": "taxAdvantaged",
          "label": "Tax advantaged",
          "action": "next",
          "description": "for example an IRA"
        },
        {
          "name": "taxable",
          "label": "Taxable",
          "action": "next",
          "description": "for example, a brokerage account"
        }]
      }
    },
    {
      "title": "Where would you be most comfortable placing yourself on the risk tolerance ?",
      "helpText": "What does this mean?",
      "helpMessage": {
        "heading": "Selecting Risk Tolerance",
        "text": "Your risk tolerance is an important component of the investment strategy we suggest. In general, a higher comfort with risk translates into a more aggressive strategy, with a greater portion of your assets in stocks."
      },
      /*"options":{
        "type":"scale",
        "name":"riskTolerance",
        "range":{
          "start": "1",
          "end": "10"
        },
        "text":{
          "start":["Less Risk","Minimize short-term losses"],
          "end":["More Risk","Maximize total returns"]
        }
      },*/
      "options": {
        "type": "radio",
        "name": "riskTolerance",
        "values": [
          {
            "name": "1",
            "label": "Low",
            "action": "next",
            "description": "for example, a brokerage account"
          },
          {
            "name": "2",
            "label": "Moderate",
            "action": "next",
            "description": "for example, a brokerage account"
          },
          {
            "name": "3",
            "label": "High",
            "action": "next",
            "description": "for example an IRA"
          }]
      },
      "errorMessage":"Please select a value for risk tolerance."
    }
  ]
})

export default getQuestionsList;