from django.test import TestCase, Client
from django.urls import reverse
from django.contrib.auth.models import User
from .models import Course

# test_test.py
"""
Integration Testing in Django using TestCase and Client.

This file demonstrates integration tests for Django views in lms_core.
"""


class LmsCoreIntegrationTest(TestCase):
    def setUp(self):
        self.client = Client()
        # Create a teacher user for course creation
        self.teacher = User.objects.create_user(username='admin', password='adminpass')
        # Log in as admin for views that require authentication (if any)
        self.client.login(username='admin', password='adminpass')

    def test_index_view(self):
        response = self.client.get(reverse('index'))
        self.assertEqual(response.status_code, 200)
        self.assertIn(b"Hello World", response.content)

    def test_testing_view(self):
        # Create a course to ensure data exists
        Course.objects.create(
            name="Integration Test Course",
            description="Test Desc",
            price=123,
            teacher=self.teacher
        )
        response = self.client.get(reverse('testing'))
        self.assertEqual(response.status_code, 200)
        self.assertIn(b"Integration Test Course", response.content)

    def test_course_list_view(self):
        Course.objects.create(
            name="Course List Test",
            description="Desc",
            price=100,
            teacher=self.teacher
        )
        response = self.client.get(reverse('course_list'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Course List Test")
        self.assertTemplateUsed(response, 'course_list.html')

    def test_addData_view(self):
        response = self.client.get(reverse('addData'))
        self.assertEqual(response.status_code, 200)
        self.assertJSONEqual(response.content, {"message": "Data berhasil ditambahkan"})
        self.assertTrue(Course.objects.filter(name="Belajar Django").exists())

    def test_editData_view(self):
        # Add course first
        course = Course.objects.create(
            name="Belajar Django",
            description="Desc",
            price=100,
            teacher=self.teacher
        )
        response = self.client.get(reverse('editData'))
        self.assertEqual(response.status_code, 200)
        self.assertJSONEqual(response.content, {"message": "Data berhasil diubah"})
        course.refresh_from_db()
        self.assertEqual(course.name, "Belajar Django Setelah update")

    def test_deleteData_view(self):
        # Add course first
        course = Course.objects.create(
            name="To Be Deleted",
            description="Desc",
            price=100,
            teacher=self.teacher
        )
        response = self.client.get(reverse('deleteData'))
        self.assertEqual(response.status_code, 200)
        # Depending on your deleteData implementation, check if the course is deleted
        # self.assertFalse(Course.objects.filter(name="To Be Deleted").exists())

# Cara menjalankan integration test di Django:
# Jalankan perintah berikut di terminal pada root project:
# python manage.py test lms_core.test_test