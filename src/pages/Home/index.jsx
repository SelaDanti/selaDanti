import React, { Component } from 'react';
import Panel from '../../components/Panel'

class Home extends Component {
    render() {
    let title = 'Coffee sugar and chicory seasonal'
    let subText = 'FEBRUARY 29, 2016|MUSIC'
    let text = 'Arista, percolator, cream, aromatic, fair trade, breve body instant lungo blue mountain cappuccino. Americano aroma mug espresso latte crema milk redeye acerbic. Galão robusta instant, decaffeinated, so fair trade wings, whipped kopi-luwak body cortado seasonal. Mug roast, café au lait affogato lungo viennese decaffeinated. Cultivar, redeye brewed seasonal, java as french press et sweet cup mazagran.'
        return (
            <React.Fragment>
                <Panel title={title} subText={subText} text={text} />
                <Panel title={title} subText={subText} text={text} />
                <Panel title={title} subText={subText} text={text} />
                <Panel title={title} subText={subText} text={text} />
                <Panel title={title} subText={subText} text={text} />
            </React.Fragment>
        )
    }
}

export default Home;