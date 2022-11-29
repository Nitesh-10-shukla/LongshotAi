import React, { useState } from 'react'
import AddList from '../../components/modal/AddList';
import "./home.css"
const Home = () => {
  const data = {
    "topic": "shopping in barcelona",
    "country": "us",
    "phrase_search": "fullsearch",
    "columnNames": [
      "Keyword",
      "Search Volume",
      "Intent",
      "CPC",
      "Competition",
      "Number of Results",
      "Trends",
      "Keyword Difficulty"
    ],
    "raw_related_data": [
      [
        "guide",
        "33100",
        "0",
        "0.64",
        "0.01",
        "14720000000",
        "0.27,0.27,0.27,0.27,0.27,0.27,0.18,0.18,0.45,1.00,0.27,0.27",
        "11"
      ],
      [
        "search engine",
        "33100",
        "8",
        "0.27",
        "0.16",
        "2080000000",
        "0.53,0.35,0.28,0.28,0.28,0.43,0.66,0.35,0.82,1.00,1.00,1.00",
        "33"
      ],
      [
        "search engine optimization",
        "33100",
        "0",
        "0.14",
        "0.27",
        "239000000",
        "0.66,0.14,0.23,0.19,0.52,0.14,0.52,1.00,0.80,0.14,0.66,0.52",
        "28"
      ],
      [
        "seo company",
        "27100",
        "0",
        "0.22",
        "0.12",
        "339000000",
        "0.21,0.21,0.21,0.14,0.21,0.39,0.59,0.48,1.00,0.88,0.88,0.59",
        "18"
      ],
      [
        "seo services",
        "27100",
        "0",
        "0.09",
        "0.27",
        "347000000",
        "0.39,0.39,0.72,1.00,1.00,0.01,0.01,0.01,0.01,0.01,0.01,0.01",
        "21"
      ]
    ],
    "raw_broadmatch_data": [
      [
        "shopping in barcelona",
        "480",
        "0",
        "0.24",
        "0.12",
        "313000000",
        "0.21,0.21,0.21,0.14,0.21,0.39,0.59,0.48,1.00,0.88,0.88,0.59",
        "46"
      ],
      [
        "how to open a weed shop in barcelona",
        "320",
        "1",
        "0",
        "0",
        "4800000",
        "0.39,0.39,0.72,1.00,1.00,0.01,0.01,0.01,0.01,0.01,0.01,0.01",
        "12"
      ],
      [
        "best shopping in barcelona",
        "260",
        "0",
        "0",
        "0.05",
        "314000000",
        "0.53,0.35,0.28,0.28,0.28,0.43,0.66,0.35,0.82,1.00,1.00,1.00",
        "44"
      ],
      [
        "shopping in barcelona spain",
        "140",
        "0",
        "0.47",
        "0.06",
        "87900000",
        "0.43,0.43,0.34,0.09,0.43,0.28,0.28,0.15,0.43,1.00,1.00,0.65",
        "44"
      ],
      [
        "best coffee shops in barcelona",
        "90",
        "0",
        "0",
        "0.01",
        "22100000",
        "0.66,0.14,0.23,0.19,0.52,0.14,0.52,1.00,0.80,0.14,0.66,0.52",
        "26"
      ],
      [
        "luxury shopping in barcelona",
        "70",
        "0",
        "0",
        "0.02",
        "19800000",
        "0.21,0.21,0.21,0.21,0.21,0.21,0.14,0.78,0.78,0.78,1.00,1.00",
        "24"
      ],
      [
        "tattoo shops in barcelona spain",
        "70",
        "0",
        "0",
        "0.04",
        "4380000",
        "0.14,0.14,0.14,0.14,0.14,0.52,0.09,0.52,0.52,0.52,0.52,0.09",
        "23"
      ],
      [
        "where to shop in barcelona",
        "70",
        "0",
        "0",
        "0.02",
        "250000000",
        "0.21,0.21,0.21,0.21,0.21,0.28,0.35,0.35,1.00,1.00,1.00,1.00",
        "36"
      ],
      [
        "best places to shop in barcelona",
        "40",
        "0",
        "0",
        "0.03",
        "0",
        "0.27,0.27,0.27,0.27,0.27,0.27,0.18,0.18,0.45,1.00,0.27,0.27",
        "42"
      ],
      [
        "is shopping cheap in barcelona",
        "40",
        "0",
        "0",
        "0",
        "21500000",
        "0.14,0.64,0.14,0.14,0.00,0.35,0.14,0.14,1.00,0.14,0.14,0.14",
        "36"
      ]
    ],
    "raw_question_data": [
      [
        "is it expensive to shop",
        "33100",
        "0",
        "0.64",
        "0.01",
        "14720000000",
        "0.27,0.27,0.27,0.27,0.27,0.27,0.18,0.18,0.45,1.00,0.27,0.27",
        "11"
      ],
      [
        "cheap things in barcelona",
        "33100",
        "8",
        "0.27",
        "0.16",
        "2080000000",
        "0.53,0.35,0.28,0.28,0.28,0.43,0.66,0.35,0.82,1.00,1.00,1.00",
        "33"
      ],
      [
        "costliest accessories",
        "33100",
        "0",
        "0.14",
        "0.27",
        "239000000",
        "0.66,0.14,0.23,0.19,0.52,0.14,0.52,1.00,0.80,0.14,0.66,0.52",
        "28"
      ],
      [
        "trending items",
        "27100",
        "0",
        "0.22",
        "0.12",
        "339000000",
        "0.21,0.21,0.21,0.14,0.21,0.39,0.59,0.48,1.00,0.88,0.88,0.59",
        "18"
      ],
      [
        "jewellery",
        "27100",
        "0",
        "0.09",
        "0.27",
        "347000000",
        "0.39,0.39,0.72,1.00,1.00,0.01,0.01,0.01,0.01,0.01,0.01,0.01",
        "21"
      ]
    ],
    "request_id": "74bf439b-ffc7-493a-b758-1e37c80c5c29",
    "status": 200,
    "created_date": "2022-11-19T05:39:27.001544"
  }
  const keywordDifficulty = function (value) {
    if (value > 85) {
      return {
        rating: "Very hard",
        text:
          "The absolute hardest keywords to compete for, especially for a new website. These will demand a lot of on page SEO, link building, and content promotion efforts to eventually rank and acquire traffic.",
        color: "#D1002F",
      };
    } else if (value >= 70) {
      return {
        rating: "Hard",
        text:
          "Even stiffer competition. These keywords will demand more effort in terms of getting higher authority referring domains in order to rank your well-optimized and helpful content among the top pages.",
        color: "#FF4953",
      };
    } else if (value >= 50) {
      return {
        rating: "Difficult",
        text:
          "You'll need to have some backlinks in addition to your well-structured, helpful and optimized content in order to compete here.",
        color: "#FF8C43",
      };
    } else if (value >= 30) {
      return {
        rating: "Possible",
        text:
          "Slightly more competition. You'll need well-structured and unique content appropriately optimized for your keywords.",
        color: "#FDC23C",
      };
    } else if (value >= 15) {
      return {
        rating: "Easy",
        text:
          "These keywords have some competition but are still possible to rank for when you're starting out. To be able to rank for these, you'll need quality content focused on the keyword's intent.",
        color: "#59DDAA",
      };
    } else {
      return {
        rating: "Very easy",
        text:
          "These are the best opportunities to start ranking new webpages on Google as soon as possible without backlinks.",
        color: "#009F81",
      };
    }
  }
  const [active, setActive] = useState("Broad Matchs")
  const [table, setTable] = useState(data.raw_broadmatch_data)
  const val = keywordDifficulty(46)
  const[modal,setModal]=useState(0);

  const openModal=()=>{
    setModal(1)
  }
  
  const closeModal=()=>{
    setModal(0)
  }
  const selectTabs = (val) => {
    setActive(val)
    if (val === "Broad Matchs") {
      setTable(data.raw_broadmatch_data)
    }
    if (val === "Related") {
      setTable(data.raw_related_data
      )
    }
    if (val === "Questions") {
      setTable(data.raw_question_data
      )
    }
  }
  return (
    <div >
      <AddList open={modal} close={closeModal} data={data.raw_broadmatch_data}/>
      <div>
        <div className='px-5 border-bottom mb-3'> <p className='mb-0' style={{ color: "gray" }}>Keyword Explorer {">"} <span style={{ color: "black" }}>Keyword Overview </span></p>
          <p className='mb-0' style={{ color: "black", fontWeight: "600" }}>Keyword:<span style={{ color: "gray" }}>{data.topic}</span></p>
          <p className='m-0 mb-3'>Database:{data.country}</p></div>
        <div className='d-block mx-auto' style={{ maxWidth: "950px" }}>
          <div className='d-flex justify-content-center gap-5 mb-3'>
            <div className='col-sm-6 card px-2  ' style={{ width: "450px" }}>
              <div class="card-body">
                <h5 class="card-title">Volume</h5>
                <div className='d-flex align-items-center gap-3'><p className='m-0'>480</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Hopkinson_Flag_for_the_U.S._Navy.png/220px-Hopkinson_Flag_for_the_U.S._Navy.png" style={{width:"30px",height:"20px"}} alt="d"/></div><hr />
                <p className='m-1'>Keyword Diffculty</p>
                <div>
                  <div>
                    <h3 className='m-1'>46%</h3>
                    <p className='m-1'>{val.rating}</p></div>
                  <div></div>
                </div>
                <p class="card-text m-1">{val.text}</p>
              </div>
            </div>

            <div className='col-sm-6  ' style={{ width: "450px" }}>
              <div className='card mb-2'>
                <div class="card-body">
                  <h5 class="card-title">Intent</h5>
                  {Object.values(intentMap)?.map((item,index)=>(<button data-toggle="tooltip" data-placement="top" title={item["hover-text"]} style={item.type==="Commercial"?{backgroundColor: "#FCE081",color:"#A75800"}:item.type==="Informational"?{ backgroundColor: "#C4E5FE", color: "#006DCA"}:item.type==="Navigational"?{backgroundColor: "#EDD9FF", color: "#8649E1"}:{backgroundColor: "#9EF2C9", color: "#007C65"}} className='cat m-2'>{item.type}</button>))}
                </div></div>
              <div className='card mb-2'>
                <div class="card-body">
                  <h5 class="card-title">Result</h5>
                  <p>333M</p>
                </div></div>
              <div className='card  mb-2'>
                <div className='d-flex justify-content-between  '>
                <div class="card-body">
                 <h3>CPC</h3>
                 <p>$0.24</p>
                                 </div>
                                 <div class="card-body ">
                 <h3>CO</h3>
                 <p>0.12</p></div>
                                 </div>
                                 </div>
            </div>
          </div>
          <div className='d-flex justify-content-between py-5'>
            <div>
              {
                tabs.map((btn, btnindx) => (
                  <button className='tabss' style={active === btn ? { backgroundColor: "#BAD3FC" } : { backgroundColor: "#D9D9D9" }} key={btnindx} onClick={() => { selectTabs(btn) }}>{btn}</button>
                ))
              }
            </div>
            <button className='addbtn' onClick={openModal}>Add to List</button>
          </div>
          <div className="table-responsive">

            <table className="table caption-top">
              <thead>
                <tr>
                  <th><input type="checkbox" /></th>
                  {
                    data.columnNames.map((item) => (
                      <th>{item}</th>
                    ))
                  }
                </tr>
              </thead>
              <tbody>
                {
                  table.map((item, index) => {
                    return <tr>
                      <td><input type="checkbox" /></td>
                      {item.map((items, indexs) => (
                        <td>{items}</td>
                      ))}
                    </tr>
                  })
                }
              </tbody>
            </table></div></div>

      </div>
    </div>
  )
}

export default Home;


const tabs = ["Broad Matchs", "Related", "Questions"]
const intentMap = {
  0: {
    type: "Commercial",
    "hover-text": "The user wants to investigate brands or services.",
    color: { bg: "#FCE081", text: "#A75800", hover: "#ffca6e" },
  },
  1: {
    type: "Informational",
    "hover-text": "The user wants to find an answer to a specific question.",
    color: { bg: "#C4E5FE", text: "#006DCA", hover: "#61c6ff" },
  },
  2: {
    type: "Navigational",
    "hover-text": "The user wants to find a specific page or site.",
    color: { bg: "#EDD9FF", text: "#8649E1", hover: "#c59dfa" },
  },
  3: {
    type: "Transactional",
    "hover-text": "The user wants to complete an action (conversion).",
    color: { bg: "#9EF2C9", text: "#007C65", hover: "#11d6a6" },
  },
 };
 