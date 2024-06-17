// import React, { useContext, useState } from "react";
// import Header from "../components/common/Header";
// import MatchingStep from "../components/matching/MatcingStep";
// import styles from "../styles/matching/Matching.module.css";
// import Text from "../components/matching/Text";
// import NextButton from "../components/matching/NextButton";
// import Advice from "../components/matching/matchingAdvice/Advice";
// import Skeep from "../components/matching/Skeep";
// import { MatchingContext } from "../components/matching/MatchingProvider";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useSelector } from 'react-redux';

// function MatchingAdvice() {
//     const { savePersonal, worry, major, personal } = useContext(MatchingContext);
//     const [selectedAdvice, setSelectedAdvice] = useState([]);
//     const navigate = useNavigate();
    
//     const userId = useSelector(state => state.userId);

//     const adviceMapping = {
//         0: "현실적으로 조언 해주는",
//         1: "계획적인 조언을 주는",
//         2: "감정적인 공감을 잘 해주는",
//         3: "현실적인 대책법을 알려주는",
//         4: "나의 경험을 설명해 줄 수 있는",
//         5: "이야기를 잘 경청해 줄 수 있는",
//         6: "좋은 아이디어를 제공할 수 있는",
//         7: "존중과 인정을 해주는"
//     };

//     const handleAdviceClick = (index) => {
//         console.log("Clicked advice index:", index);
//         setSelectedAdvice(prevSelected => {
//             let newSelected;
//             if (prevSelected.includes(index)) {
//                 newSelected = prevSelected.filter(i => i !== index);
//             } else {
//                 newSelected = [...prevSelected, index];
//             }
//             const selectedAdviceTexts = newSelected.map(i => adviceMapping[i]);
//             const personalString = selectedAdviceTexts.join(", ");
//             savePersonal(personalString);
//             console.log("Selected advice texts:", personalString);
//             return newSelected;
//         });
//     };

//     const handleNext = () => {
//         recommendsMentor();
//         // navigate("/matchingMento");
//     };

//     const adviceList = [
//         { text: "현실적으로 조언 해주는 🤔" },
//         { text: "계획적인 조언을 주는 📝" },
//         { text: "감정적인 공감을 잘 해주는 🥹" },
//         { text: "현실적인 대책법을 알려주는 🥸" },
//         { text: "나의 경험을 설명 해 줄 수 있는 💬" },
//         { text: "이야기를 잘 경청 해 줄 수 있는 👂🏻" },
//         { text: "좋은 아이디어를 제공 할 수 있는 💡" },
//         { text: "존중과 인정을 해주는 😌" }
//     ];

//     const recommendsMentor = async () => {
//         try {
//             const res = await axios.post(`${process.env.REACT_APP_HOST}/api/mentors/recommends`, {
//                 userId: userId,
//                 worry: worry,
//                 major: major,
//                 personal: personal
//             });
//             console.log("Mentor recommendation success:", res.data.data);
//         } catch (error) {
//             console.error("에러에러!!:", error);
//         }
//     };

//     return (
//         <div>
//             <Header text="매칭 테스트" />
//             <div className={styles['matching-container']}>
//                 <MatchingStep />
//                 <Text mainText="원하는 조언 성향 선택해주세요" subText="어떤 " span="조언 성향 " subText2="을 가진 선배에게 멘토 받고싶으신가요?" />
//                 <div className={styles['advice-container']}>
//                     {adviceList.map((advice, index) => (
//                         <Advice
//                             key={index}
//                             text={advice.text}
//                             onClick={() => handleAdviceClick(index)}
//                             isSelected={selectedAdvice.includes(index)}
//                         />
//                     ))}
//                 </div>
//                 <Skeep nextRoute="/matchingMento" />
//                 <NextButton text="다음" onClick={handleNext} disabled={selectedAdvice.length === 0} />
//             </div>
//         </div>
//     );
// }

// export default MatchingAdvice;

import React, { useContext, useState } from "react";
import Header from "../components/common/Header";
import MatchingStep from "../components/matching/MatcingStep";
import styles from "../styles/matching/Matching.module.css";
import Text from "../components/matching/Text";
import NextButton from "../components/matching/NextButton";
import Advice from "../components/matching/matchingAdvice/Advice";
import Skeep from "../components/matching/Skeep";
import { MatchingContext } from "../components/matching/MatchingProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from 'react-redux';
import { MentorContext } from "../components/home/MentoProvider";

function MatchingAdvice() {
    const { savePersonal, worry, major } = useContext(MatchingContext);
    const {mentor, setMentor} = useContext(MentorContext);
    const [selectedAdvice, setSelectedAdvice] = useState([]);
    const navigate = useNavigate();
    const userId = useSelector(state => state.userId);

    const adviceMapping = {
        0: "현실적으로 조언 해주는",
        1: "계획적인 조언을 주는",
        2: "감정적인 공감을 잘 해주는",
        3: "현실적인 대책법을 알려주는",
        4: "나의 경험을 설명해 줄 수 있는",
        5: "이야기를 잘 경청해 줄 수 있는",
        6: "좋은 아이디어를 제공할 수 있는",
        7: "존중과 인정을 해주는"
    };

    const handleAdviceClick = (index) => {
        console.log("Clicked advice index:", index);
        setSelectedAdvice(prevSelected => {
            let newSelected;
            if (prevSelected.includes(index)) {
                newSelected = prevSelected.filter(i => i !== index);
            } else {
                newSelected = [...prevSelected, index];
            }
            const selectedAdviceTexts = newSelected.map(i => adviceMapping[i]);
            const personalString = selectedAdviceTexts.join(", ");
            savePersonal(personalString);
            console.log("Selected advice texts:", personalString);
            return newSelected;
        });
    };

    const handleNext = async () => {
        recommendsMentor();
        setMentor(mentor)
        navigate("/matchingMento");
    };

    const adviceList = [
        { text: "현실적으로 조언 해주는 🤔" },
        { text: "계획적인 조언을 주는 📝" },
        { text: "감정적인 공감을 잘 해주는 🥹" },
        { text: "현실적인 대책법을 알려주는 🥸" },
        { text: "나의 경험을 설명 해 줄 수 있는 💬" },
        { text: "이야기를 잘 경청 해 줄 수 있는 👂🏻" },
        { text: "좋은 아이디어를 제공 할 수 있는 💡" },
        { text: "존중과 인정을 해주는 😌" }
    ];

    const recommendsMentor = async () => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_HOST}/api/mentors/recommends`, {
                userId: userId,
                worry: worry,
                major: major,
                personal: selectedAdvice.map(i => adviceMapping[i]).join(", ")
            });
            console.log("Mentor recommendation success:", res.data.data);
            console.log("멘토:", res.data.data);
            setMentor(res.data.data);
        } catch (error) {
            console.error("에러에러!!:", error);
        }
    };

    return (
        <div>
            <Header text="매칭 테스트" />
            <div className={styles['matching-container']}>
                <MatchingStep />
                <Text mainText="원하는 조언 성향 선택해주세요" subText="어떤 " span="조언 성향 " subText2="을 가진 선배에게 멘토 받고싶으신가요?" />
                <div className={styles['advice-container']}>
                    {adviceList.map((advice, index) => (
                        <Advice
                            key={index}
                            text={advice.text}
                            onClick={() => handleAdviceClick(index)}
                            isSelected={selectedAdvice.includes(index)}
                        />
                    ))}
                </div>
                <Skeep nextRoute="/matchingMento" />
                <NextButton text="다음" onClick={handleNext} disabled={selectedAdvice.length === 0} />
            </div>
        </div>
    );
}

export default MatchingAdvice;