<section>
    <div class="page-container grid grid-cols-12 gap-y-16 py-8 px-4">
        <div class="info-container col-span-7">
            <div
                class="job-title mb-8 xl:text-9xl lg:text-8xl sm:text-7xl text-4xl"
            >
                <h1>
                    SOFTWARE
                    <span class="text-primary">DEVELOPER</span>
                </h1>
            </div>
            <div class="button-container">
                <div
                    class="flex flex-wrap gap-2 xl:text-6xl lg:text-3xl sm:text-2xl text-sm"
                >
                    <button
                        class="btn border-0 bg-dark-grey hover:bg-primary rounded-full py-1 px-2"
                        >Download CV <i class="fa-solid fa-download"
                        ></i></button
                    >
                </div>
            </div>
        </div>
        <div class="profile-img-container col-span-5">
            <div class="img-wrapper border-4 rounded-full border-primary">
                <img
                    src="PXL_20240816_162945748.jpg"
                    alt="fun image"
                    class="boder-0 rounded-full"
                />
            </div>
        </div>
        <!-- next section -->
        <section aria-labelledby="about-heading" class="col-span-12">
            <div class="about-container">
                <h2
                    id="about-heading"
                    class="flex mb-4
                    xl:text-9xl lg:text-8xl sm:text-6xl text-4xl"
                >
                    <span>About</span>
                    <span class="text-primary ml-1">me</span>
                </h2>
                <div
                    class="about-details bg-dark-grey border-0 rounded-lg p-2 flex flex-col sm:gap-2 gap-4 text-light"
                >
                    <p>
                        I am a software developer specializing in full-stack web
                        development, primarily in Python and Golang. Outside of
                        web development, I’ve also worked with concepts like
                        data science, web scraping, and automation. Recently,
                        I’ve been exploring C++ in my free time, so I can get
                        into more low level technologies like embedded systems
                        and IoT.
                    </p>
                </div>
            </div>
        </section>
        <section aria-labelledby="skills-heading" class="col-span-12">
            <div class="skills-container px-4">
                <h2
                    id="skills-heading"
                    class="mb-4 xl:text-9xl lg:text-8xl sm:text-6xl text-4xl"
                >
                    Skills
                </h2>
                <div
                    class="skills grid grid-cols-2 bg-dark-grey p-8 border-0 rounded-lg max-w-[60ch]"
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
    </div>
</section>

<style>
    :root {
        --fw: 600;
    }
    .job-title {
        font-weight: var(--fw);
    }
    .img-wrapper > img {
        object-fit: cover;
        width: 100%; /* Or another max size */
        aspect-ratio: 1/1;
    }
    .about-details {
        max-width: 60ch;
    }
    h2 {
        font-weight: var(--fw);
    }
</style>
