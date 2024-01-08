import * as React from 'react';
import AskCommunity from '../components/AskCommunity'
import Post from '../components/Post'
import Layout from '../layout/Layout'

const Community = () => {
    const [posts, setPosts] = React.useState(null);
    const [createOpen, setCreateOpen] = React.useState(false);

    return (
        <Layout>
            <AskCommunity
                createOpen={createOpen}
                setCreateOpen={setCreateOpen}
                setPosts={setPosts}
            />
            <Post
                posts={posts}
                setPosts={setPosts}
            />
        </Layout>
    )
}

export default Community