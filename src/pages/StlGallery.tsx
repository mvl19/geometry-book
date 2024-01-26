import StlCard from "../components/StlCard"

export default function StlGallery () {
    return (
      <div className='flex flex-wrap'>
          <StlCard url="https://storage.googleapis.com/ucloud-v3/2272dfa00d58a59dae26a399.stl" description="CAPTION" />
          <StlCard url="https://storage.googleapis.com/ucloud-v3/2272dfa00d58a59dae26a399.stl" description="CAPTION" />
          <StlCard url="https://storage.googleapis.com/ucloud-v3/2272dfa00d58a59dae26a399.stl" description="CAPTION" />
      </div>
    )
}
