import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
    return (
        <div className="recommendedvideos">
            <h2>Recommended Videos</h2>

            <div className="recommendedvideos__videos">
                <VideoCard
                    title="Python Tutorial - Python for Beginners [Full Course]"
                    views="4.4M views"
                    timestamp="2 days ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJymy6xr9_W7GTkPW1ov2OyxzvNCOE-ff1d7VK36Cg=s100-c-k-c0xffffffff-no-rj-mo"
                    channel="Programming with Mosh"
                    image="https://i.ytimg.com/vi/_uQrJ0TkZlc/maxresdefault.jpg"
                />
                <VideoCard
                    title="Learn to become a highly skilled & valuable developer"
                    views="1.4M views"
                    timestamp="9 days ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s176-c-k-c0x00ffffff-no-rj-mo"
                    channel="Clever Programmer"
                    image="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/a3liO9nUSCyEhyiAnDOw_Profit-with-JavaScript-new.jpg"
                />
                <VideoCard
                    title="Node.js Tuturial for Beginners [Full Course]"
                    views="2.4M views"
                    timestamp="2 years ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJymy6xr9_W7GTkPW1ov2OyxzvNCOE-ff1d7VK36Cg=s100-c-k-c0xffffffff-no-rj-mo"
                    channel="Programming with Mosh"
                    image="https://i.ytimg.com/vi/TlB_eWDSMt4/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA9QVLNW6zvcxaAfBH6Sc78HRKaTQ"
                />
                <VideoCard
                    title="Top 5 Programming Languages to Learn to Get a Job at Google, Facebook, Microsoft, etc."
                    views="4.1M views"
                    timestamp="18 days ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJxJwY29yXENbgxRO0WxVMtiWyt65BT9iF2mNgWJ=s176-c-k-c0x00ffffff-no-rj-mo"
                    channel="CS Dojo"
                    image="https://i.ytimg.com/vi/wgiW1uFZYr8/maxresdefault.jpg"
                />
                <VideoCard
                    title="EMIWAY -ROUND ONE(OFFICAL MUSIC VIDEO)"
                    views="9.4M views"
                    timestamp="1 month ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJyMRxNNV3HRjYxMtdovdvCiAdWZnnAAnDQ9g_7UTw=s176-c-k-c0x00ffffff-no-rj-mo"
                    channel="Emiway Bantai"
                    image="https://i.ytimg.com/vi/9ZExHfTExCU/maxresdefault.jpg"
                />
                <VideoCard
                    title="Tanahun Rising Star Dancing School"
                    views="1.4M views"
                    timestamp="2 months ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJySM83tMEGFgXx4JF3j_5gBdVX5J9NrPotzC0w4ng=s100-c-k-c0xffffffff-no-rj-mo"
                    channel="Tanahun Rising Star Dance School"
                    image="https://i.ytimg.com/vi/v18THRLK1xw/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCjhd6Ehkmmtliek6eGu2PStOc7-g"
                />
                <VideoCard
                    title="Mirage -Dino Jame[Offical Video]"
                    views="6M views"
                    timestamp="3 weeks ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJwdgU_V14Hgp5W7a21y_wZp1pey0uawhKN90jDpHA=s88-c-k-c0xffffffff-no-nd-rj"
                    channel="Dino James"
                    image="https://i.ytimg.com/vi/cjzYKwOLKoY/maxresdefault.jpg"
                />
                <VideoCard
                    title="Ed Sheeran -Perfect (Offical Music Video)"
                    views="2.65B views"
                    timestamp="2 years ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJzDKZRv7njJg2AK7YjrclymZ2z2t5LdUxn5fJsO=s100-c-k-c0xffffffff-no-rj-mo"
                    channel="Ed Sheeran"
                    image="https://i.ytimg.com/vi/2Vv-BfVoq4g/sddefault.jpg"
                />
                <VideoCard
                    title="3 Signs of TRUE LOVE-By Sandeep Maheshwari"
                    views="11.6M views"
                    timestamp="3 years ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJxhyJiXMhsZ5rlKmBRU0PBdDnyFWFssppjg3cD98g=s100-c-k-c0xffffffff-no-rj-mo"
                    channel="Sandeep Maheshwari"
                    image="https://i.ytimg.com/vi/s_1bFkC2tRY/hqdefault.jpg"
                />

            </div>
        </div>
    )
}

export default RecommendedVideos;


