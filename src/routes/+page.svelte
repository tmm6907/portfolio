<script>
    import Carousel from "../components/Carousel.svelte";
</script>

<section>
    <div class="page-container grid grid-cols-12 gap-y-8 py-8 px-4">
        <section class="header-container col-span-12">
            <div class="flex">
                <div>
                    <div
                        class="job-title xl:text-9xl lg:text-8xl sm:text-7xl text-3xl mb-2"
                    >
                        <h1>
                            SOFTWARE
                            <span class="text-primary">DEVELOPER</span>
                        </h1>
                    </div>
                    <div class="button-container">
                        <button
                            class="button border-0 bg-dark-grey hover:bg-primary rounded-full xl:text-3xl text-sm"
                            >Download CV <i class="fa-solid fa-download"
                            ></i></button
                        >
                    </div>
                </div>
                <div class="profile-img-container max-w-[40%] mx-4">
                    <div
                        class="img-wrapper border-4 rounded-full border-primary
                                
                                "
                    >
                        <img
                            src="PXL_20240816_162945748.jpg"
                            alt="fun image"
                            class="boder-0 rounded-full w-full object-cover aspect-square"
                        />
                    </div>
                </div>
            </div>
        </section>

        <!-- next section -->
        <section aria-labelledby="about-heading" class="col-span-12">
            <div class="about-container">
                <h2
                    id="about-heading"
                    class="flex mb-4
                    "
                >
                    <span>About</span>
                    <span class="text-primary ml-2">me</span>
                </h2>
                <div
                    class="about-details bg-dark-grey border-0 rounded-lg
                    p-2 flex flex-col sm:gap-2 gap-4 text-light"
                >
                    <p>
                        I am a software developer specializing in full-stack web
                        development, primarily in Python and Golang. Recently,
                        I’ve been exploring C++ in my free time, so I can get
                        into more low level technologies like embedded systems
                        and IoT.
                    </p>
                </div>
            </div>
        </section>
        <section aria-labelledby="skills-heading" class="col-span-12">
            <div class="skills-container">
                <h2
                    id="skills-heading"
                    class="mb-4 xl:text-9xl lg:text-8xl sm:text-6xl text-4xl"
                >
                    Skills
                </h2>
                <div
                    class="skills grid sm:grid-cols-2 gap-2 bg-dark-grey px-8 py-2 border-0 rounded-lg max-w-[60ch]"
                >
                    <div class="primary-skills">
                        <ul>
                            <li>
                                Python
                                <ul id="python-skills">
                                    <li>Flask</li>
                                    <li>Django</li>
                                    <li>Pandas/Numpy</li>
                                </ul>
                            </li>
                            <li>
                                Golang
                                <ul id="go-skills">
                                    <li>Gin</li>
                                    <li>Echo</li>
                                </ul>
                            </li>
                            <li>
                                JavaScript/TypeScript
                                <ul id="js-skills">
                                    <li>Svelte</li>
                                    <li>JQuery</li>
                                    <li>React</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="other-skills">
                        <ul>
                            <li>SQL (MySQL, SQLite, SQL Server, Postgres)</li>
                            <li>REST/SOAP</li>
                            <li>Shell Scripting (Bash/Powershell)</li>
                            <li>Cloud (AWS, GCP, Azure)</li>
                            <li>Containerization (Docker, Docker Compose)</li>
                            <li>HTML/CSS/Tailwind</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section aria-labelledby="projects-header" class="col-span-12">
            <h2 id="projects-header" class="mb-4">Projects</h2>
            <Carousel />
        </section>
    </div>
</section>

<style>
    :root {
        --fw: 600;
    }
    .job-title {
        font-weight: var(--fw);
    }

    .about-details {
        max-width: 60ch;
    }

    .primary-skills > ul {
        list-style: disc;
        color: var(--color-primary);
        font-weight: 600;

        ul {
            color: var(--color-white);
            font-weight: 400;
            list-style: circle;
        }
    }

    .other-skills > ul {
        list-style: disc;
    }
</style>
