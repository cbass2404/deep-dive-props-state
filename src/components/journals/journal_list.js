import React, { Component } from "react";

const rawJournalData = [
  { title: "Post One", content: "Post content", status: "draft" },
  { title: "Post Two", content: "Post content", status: "punlished" },
  { title: "Post Three", content: "Post content", status: "punlished" },
  { title: "Post Four", content: "Post content", status: "punlished" },
];

class JournalList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      journalData: rawJournalData,
      greeting: 'Hi there',
      isOpen: true
    };
  }
  render() {
    return <div>{this.state.greeting}</div>
  }
}

export default JournalList;
