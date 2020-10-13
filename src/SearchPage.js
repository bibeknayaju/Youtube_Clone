import React from 'react';
import './searchPage.css';
import VideoRow from './VideoRow';
import ChannelRow from './ChannelRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>Filter</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://yt3.ggpht.com/a-/AOh14Ghdkox3VrA8wZditRhbl3-nx6R8LyyYdwNUFG4DBg=s88-c-k-c0xffffffff-no-rj-mo"
                channel="Bibek Nayaju"
                verified
                subs="1.2M"
                noOfVideos={393}
                description="You can make you dream real. Just work hard, focus on it. Give your 100%. JUST DO IT BRO!"
            />
            <hr />
            <VideoRow
                views="4.3M"
                subs="1.2M"
                description="Just do it!"
                timestamp="1 year ago"
                channel="Bibek Nayaju"
                title="Go up and never stop"
                image="https://miro.medium.com/max/4096/1*DE3QhK0g0gLUHKrEKXB7jA.jpeg"
            />
            <VideoRow
                views="1.2M"
                subs="1.2M"
                description="Tomorrow never comes man. You can do it today just focus on it."
                timestamp="6 months ago"
                channel="Bibek Nayaju"
                title="No Tomorrow-You can do it today!"
                image="https://i.ytimg.com/vi/T6Wufigr1p4/hqdefault.jpg"
            /><VideoRow
                views="11.2M"
                subs="1.2M"
                description="Keep Going!"
                timestamp="1 year ago"
                channel="Bibek Nayaju"
                title="Pain Today PRIDE Tomorrow"
                image="https://i.ytimg.com/vi/3RXnBrWkm9Q/maxresdefault.jpg"
            /><VideoRow
                views="7.2M"
                subs="1.2M"
                description="#believe_in_you"
                timestamp="6 month ago"
                channel="Bibek Nayaju"
                title="DON'T WASTE YOUR LIFE"
                image="https://speechasia.com/wp-content/uploads/2020/01/maxresdefault-24-1200x675.jpg"
            /><VideoRow
                views="4.2M"
                subs="1.2M"
                description="DON'T GIVE UP, YOU CAN DO IT! | JUST TRY IT"
                timestamp="1 year ago"
                channel="Bibek Nayaju"
                title="DON'T LIVE IN!"
                image="https://i.ytimg.com/vi/ffmc5bQyYP0/maxresdefault.jpg"
            /><VideoRow
                views="5.2M"
                subs="1.2M"
                description="Nothing is impossible in this whole entire world | Just you make it impossibe"
                timestamp="5 months ago"
                channel="Bibek Nayaju"
                title="WINNER DON'T MAKE EXCUSES"
                image="https://i.pinimg.com/originals/ff/6b/f5/ff6bf5b09047608024213590143f3e75.jpg"
            />
        </div>
    )
}

export default SearchPage;
