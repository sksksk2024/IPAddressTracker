import location from './../images/icon-location.svg';

export function Main() {
  return (
    <main className="relative w-screen h-[60dvh] flex justify-center items-center z-0">
      <img
        src={location}
        className="max-w-container-1440 absolute sm:inset-x-1/3"
        alt="target location"
      />
    </main>
  );
}
