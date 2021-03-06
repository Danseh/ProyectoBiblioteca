<?php

namespace App\Controller;

use App\Entity\Curso;
use App\Form\CursoType;
use App\Repository\CursoRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/admin/curso')]
class CursoController extends AbstractController
{
    #[Route('/', name: 'curso_list', methods: ['GET'])]
    public function index(CursoRepository $cursoRepository): Response
    {
        return $this->render('admin/cursosList.html.twig', [
            'cursoList' => $cursoRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'curso_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $curso = new Curso();
        $form = $this->createForm(CursoType::class, $curso);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($curso);
            $entityManager->flush();

            return $this->redirectToRoute('admin', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('admin/newCurso.html.twig', [
            'curso' => $curso,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'curso_show', methods: ['GET'])]
    public function show(Curso $curso): Response
    {
        return $this->render('curso/show.html.twig', [
            'curso' => $curso,
        ]);
    }

    #[Route('/{id}/edit', name: 'curso_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Curso $curso, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(CursoType::class, $curso);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('curso_list', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('curso/edit.html.twig', [
            'curso' => $curso,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'curso_delete', methods: ['POST'])]
    public function delete(Request $request, Curso $curso, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$curso->getId(), $request->request->get('_token'))) {
            $entityManager->remove($curso);
            $entityManager->flush();
        }

        return $this->redirectToRoute('curso_list', [], Response::HTTP_SEE_OTHER);
    }
}
