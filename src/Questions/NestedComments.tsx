const data = [
  {
    text: "comment 1",
    Children: [
      {
        text: "nested comment 1-1",
        Children: [
          {
            text: "nested comment 1-1-1",
            Children: [],
          },
        ],
      },
      {
        text: "nested comment 1-2",
        Children: [
          {
            text: "nested comment 1-2-1",
            Children: [],
          },
        ],
      },
    ],
  },
  {
    text: "comment 2",
    Children: [],
  },
];

const NestedCommentUI = ({ comment }: { comment: any }) => {
  return (
    <div
      style={{
        marginLeft: "30px",
        borderLeft: "1px solid grey",
        padding: "10px",
      }}
    >
      {comment.text}
      {comment.Children.map((comment: any) => (
        <NestedCommentUI comment={comment} />
      ))}
    </div>
  );
};

const NestedComments = () => {
  return (
    <>
      {data.map((comment) => (
        <NestedCommentUI comment={comment} />
      ))}
    </>
  );
};

export default NestedComments;
