import React from 'react';
import './App.css';

interface SelectProps {
    label: string;
}

function App() {
    return (
        <div>
            <Landing></Landing>
            <hr/>
            <AddNewEntry></AddNewEntry>
            <hr/>
            <DisplayOverview></DisplayOverview>
        </div>
    );
}

class Landing extends React.Component {
    render() {
        return (
            <div>
                <Button value={"Add new entry"}></Button>
                <Button value={"Overview"}></Button>
            </div>
        )
    }
}

class AddNewEntry extends React.Component {
    render() {
        return (
            <div>
                This is the add-new-entry view.
                <BackButton></BackButton>
                <form>
                    <label htmlFor="amount">Amount</label>
                    <input type='text' id='amount' placeholder={'some amount'} />

                    <label htmlFor="category">Category</label>
                    <input type="text" id='category' placeholder={'Choose category'} />

                    <label htmlFor='date'>Date</label>
                    <input type='text' placeholder={'Choose Date'} />
                </form>
                <SubmitButton></SubmitButton>
            </div>
        );
    }
}

class DisplayOverview extends React.Component {
    render() {
        return (
            <div>
                <p>This is the display view.</p>
                <BackButton></BackButton>
                <Select label={'From'}></Select>
                <Select label={'To'}></Select>
                <Table></Table>
            </div>
        );
    }
}

const TableCell = () => {
    return (
        <span>Some info here</span>
    )
}

const TableRow = () => {
    return (
        <div>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
        </div>
    )
}

const Table = () => {
    return (
        <div>
            <TableRow></TableRow>
            <TableRow></TableRow>
            <TableRow></TableRow>
        </div>
    );
}

const BackButton = () => {
    return (
        <button>Back</button>
    );
}

const SubmitButton = () => {
    return (
        <button type="submit">Submit</button>
    );
}

const Select = (props: SelectProps) => {
    return (
        <div>
            <label htmlFor="cars">{props.label}</label>
            <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
        </div>
    );
}

const Button = (props) => {
    return (
        <button>{props.value}</button>
    );
}

export default App;
