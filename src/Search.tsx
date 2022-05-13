import React from "react";

interface SearchProps {
    // data: string
}
interface SearchState {
    data: SearchResult
}

interface SearchResult {
    total: number,
    items: Array<SearchItem>
}

interface SearchItem {
    id: number
    name: string
    image: string
    url: string
}
class Search extends React.Component<SearchProps, SearchState> {
    constructor(props: SearchProps) {
        super(props);
        this.state = { data: { "total": 0, "items": [] } };
    }

    handleChange = (value: string) => {
        const fetchData = fetch("https://2isz0zc3qk.execute-api.eu-central-1.amazonaws.com/staging/search?term=" + value)
            .then(response => { if (response.ok) {return response.json() } else return { "total": 0, "items": [] } as SearchResult })
            .then(data => data as SearchResult)
            .then(result => this.setState((state) => ({ data: result })))
    }

    render() {
        return (

            <div><input type="text" onChange={e => this.handleChange(e.target.value)} />

                <div>
                    <ul>
                        <li><div><img src={this.state.data.items[0]?.image} /></div>
                            <div dangerouslySetInnerHTML={{__html: this.state.data.items[0]?.name}}></div></li>
                        <li><div><img src={this.state.data.items[1]?.image} /></div>
                            <div dangerouslySetInnerHTML={{__html: this.state.data.items[1]?.name}}></div></li>
                        <li><div><img src={this.state.data.items[2]?.image} /></div>
                            <div dangerouslySetInnerHTML={{__html: this.state.data.items[2]?.name}}></div></li>
                        <li><div><img src={this.state.data.items[3]?.image} /></div>
                            <div dangerouslySetInnerHTML={{__html: this.state.data.items[3]?.name}}></div></li>
                        <li><div><img src={this.state.data.items[4]?.image} /></div>
                            <div dangerouslySetInnerHTML={{__html: this.state.data.items[4]?.name}}></div></li>

                    </ul>
                </div>
            </div>
        )
    }
};

export default Search; 