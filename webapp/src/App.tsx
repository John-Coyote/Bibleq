export const App = () => {
  const questions = [
    { nick: "1", name: "question 1", discription: "Discription of question 1" },
    { nick: "2", name: "question 2", discription: "Discription of question 2" },
    { nick: "3", name: "question 3", discription: "Discription of question 3" },
    { nick: "4", name: "question 4", discription: "Discription of question 4" },
    { nick: "5", name: "question 5", discription: "Discription of question 5" },
  ];
  return (
    <div>
      <h1>Bibleq</h1>
      {questions.map((question) => {
        return (
          <div key={question.nick}>
            <h2>{question.name}</h2>
            <p>{question.discription}</p>
          </div>
        );
      })}
    </div>
  );
};
