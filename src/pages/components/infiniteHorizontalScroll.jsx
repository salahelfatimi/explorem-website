
const InfiniteHorizontalScroll = ({images}) => {
  return (
    <div class="relative font-inter antialiased">

    <main class="relative min-h-screen flex flex-col justify-center bg-slate-900 overflow-hidden">
        <div class="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
            <div class="text-center">

                <div
                    x-data="{}"
                    x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
                    class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                >
                    <ul x-ref="logos" class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        <li>
                            <img src="https://cruip-tutorials.vercel.app/logo-carousel/facebook.svg" alt="Facebook" />
                        </li>
                        <li>
                            <img src="https://cruip-tutorials.vercel.app/logo-carousel/disney.svg" alt="Disney" />
                        </li>
                        <li>
                            <img src="https://cruip-tutorials.vercel.app/logo-carousel/airbnb.svg" alt="Airbnb" />
                        </li>
                        <li>
                            <img src="https://cruip-tutorials.vercel.app/logo-carousel/apple.svg" alt="Apple" />
                        </li>
                        <li>
                            <img src="https://cruip-tutorials.vercel.app/logo-carousel/spark.svg" alt="Spark" />
                        </li>
                        <li>
                            <img src="https://cruip-tutorials.vercel.app/logo-carousel/samsung.svg" alt="Samsung" />
                        </li>
                        <li>
                            <img src="https://cruip-tutorials.vercel.app/logo-carousel/quora.svg" alt="Quora" />
                        </li>
                        <li>
                            <img src="https://cruip-tutorials.vercel.app/logo-carousel/sass.svg" alt="Sass" />
                        </li>
                    </ul> 
                    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                    <li>
                            <img src="https://cruip-tutorials.vercel.app/logo-carousel/facebook.svg" alt="Facebook" />
                        </li>
                        <li>
                            <img src="https://cruip-tutorials.vercel.app/logo-carousel/disney.svg" alt="Disney" />
                        </li>
                        <li>
                            <img src="https://cruip-tutorials.vercel.app/logo-carousel/airbnb.svg" alt="Airbnb" />
                        </li>
                        <li>
                            <img src="https://cruip-tutorials.vercel.app/logo-carousel/apple.svg" alt="Apple" />
                        </li>
                        <li>
                            <img src="https://cruip-tutorials.vercel.app/logo-carousel/spark.svg" alt="Spark" />
                        </li>
                        <li>
                            <img src="https://cruip-tutorials.vercel.app/logo-carousel/samsung.svg" alt="Samsung" />
                        </li>
                        <li>
                            <img src="https://cruip-tutorials.vercel.app/logo-carousel/quora.svg" alt="Quora" />
                        </li>
                        <li>
                            <img src="https://cruip-tutorials.vercel.app/logo-carousel/sass.svg" alt="Sass" />
                        </li>
    </ul>               
                </div>
                
            </div>

        </div>
    </main>
    
   

</div>
  );
};

export default InfiniteHorizontalScroll;