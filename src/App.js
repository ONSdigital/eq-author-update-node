import logo from "./logo.svg";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { themes } from "./constants/theme.js";
import "./App.css";
import Button from "./components/buttons/Button/index.js";
import Collapsible from "./components/Collapsible/index.js";
import CollapsibleToggle from "./components/CollapsibleToggled/index.js";
import CollapsibleNavItem from "./components/CollapsibleNavItem/index.js";
import CollapsibleMoveable from "./components/CollapsibleMoveable/index.js";
// import Header from "./components-themed/Header/index";
import Header from "./components-themed/HomepageQuestionnairesView/Header/index.js";
import Footer from "./components-themed/Footer/index.js";
import styled from "styled-components";
import { colors } from "./constants/theme.js";
import Input from "./components/Forms/Input/index.js";
import Grid from "./components/Grid/Grid.js";
import Decimal from "./components/AnswerContent/Decimal/index.js";
import AnswerPicker from "./components/AnswerPicker/index.js";
// import AnswerTypeSelector from "./components/AnswerTypeSelector";
import PaginationNav from "./components-themed/HomepageQuestionnairesView/PaginationNav/PaginationNav.js";
import QuestionnaireTable from "./components-themed/HomepageQuestionnairesView/QuestionnairesTable/index.js";
import Panel from "./components/Panel";
import * as Headings from "./constants/table-headings";
import questionnaires from "./exampleQuestionnaire";
import Badge from "./components/Badge";
import CharacterCounter from "./components/CharacterCounter";
import { BrowserRouter } from "react-router-dom";
// import Comments from "./components/Comments/Comment";
// import ContentPicker from "./components/ContentPickerv2";
import NoSearchResults from "./components/NoSearchResults";
import DeleteConfirmDialog from "./components/DeleteConfirmDialog";
import DialogHeader from "./components/Dialog/DialogHeader";
import DialogIcon from "./components/Dialog/DialogIcon";
import { DialogAlert } from "./components/Dialog/DialogAlert";
import DialogMessage from "./components/Dialog/DialogMessage";

const App = () => {
  const Title = styled.h1`
    font-size: 1em;
    font-weight: 600;
    margin: 0;
  `;

  const StyledGrid = styled(Grid)`
    overflow: hidden;
    &:focus-visible {
      border: 3px solid ${colors.focus};
      margin: 0;
      outline: none;
    }
  `;

  const SearchInput = styled(Input).attrs({
    type: "search",
    placeholder: "Search questionnaire titles",
  })`
    width: ${(props) => (props.size === "large" ? "27em" : "20em")};
    padding: ${(props) => (props.paddingType === "large" ? "0.6em" : "0.4em")};
    line-height: 1;
    padding-left: 2.5em;
    border-radius: 3px;
    font-size: 1rem;
    line-height: 1rem;
    border: 1px solid ${colors.black};
    &:hover {
      outline: none;
    }
    &:focus,
    &:active {
      box-shadow: 0 0 0 2px ${colors.sunYellow};
    }
  `;
  const enabledHeadings = [
    Headings.TITLE,
    Headings.OWNER,
    Headings.CREATED,
    Headings.MODIFIED,
    Headings.LOCKED,
    Headings.STARRED,
    Headings.ACCESS,
    Headings.ACTIONS,
  ];

  return (
    <BrowserRouter>
      <ThemeProvider theme={themes["ons"]}>
        <div className="App">
          <Header
            variant="Internal"
            headerDescription="Questionnaire builder"
          />
          <Header></Header>
          <div>
            <Title>World Best Designer Right Here</Title>
            <SearchInput id="search" defaultValue={""} />
            {/* <ContentPicker startingSelectedAnswers={[]} singleItemSelect /> */}
            <AnswerPicker title="Select one or more answer" showTypes />
            {/* <Button>Create questionnaire</Button>
            <Panel>
              <QuestionnaireTable
                enabledHeadings={enabledHeadings}
                sticky={false}
                questionnaires={questionnaires}
              ></QuestionnaireTable>
            </Panel> */}
            <DeleteConfirmDialog>
              working just put isOpen prop to true
            </DeleteConfirmDialog>
            <DialogAlert isOpen={true}></DialogAlert>
            <NoSearchResults></NoSearchResults>
            <CharacterCounter value={34} limit={24} />
            <Badge variant="nav" medium data-test="NavItem-error"></Badge>
            <Collapsible title="Ok" defaultOpen></Collapsible>
            {/* <CollapsibleMoveable title="Ok">asfnja</CollapsibleMoveable> */}
            <CollapsibleToggle
              title="sdkf"
              onChange={console.log("change :>> ")}
            >
              here here{" "}
            </CollapsibleToggle>
            <CollapsibleNavItem
              title="samn db"
              titleUrl="/"
            ></CollapsibleNavItem>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Look and appreciate this art
            </a>
          </div>
          <PaginationNav></PaginationNav>
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
